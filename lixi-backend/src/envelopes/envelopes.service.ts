import {
    Injectable,
    NotFoundException,
    BadRequestException,
    ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { createHash } from 'crypto';
import { getRandomWish } from '../data/wishes';

@Injectable()
export class EnvelopesService {
    constructor(private prisma: PrismaService) { }

    /**
     * Random lucky amount in VND (20k - 50k)
     * Only even numbers or culturally lucky numbers
     * Higher amounts are slightly rarer for excitement
     */
    generateAmount(): number {
        const r = Math.random();
        let amount: number;

        if (r < 0.03) {
            // 3% chance: jackpot 50k
            amount = 50;
        } else if (r < 0.15) {
            // 12% chance: higher tier (40-48k)
            const higher = [40, 42, 44, 46, 48];
            amount = higher[Math.floor(Math.random() * higher.length)];
        } else if (r < 0.45) {
            // 30% chance: mid tier (32-38k)
            const mid = [32, 34, 36, 38];
            amount = mid[Math.floor(Math.random() * mid.length)];
        } else {
            // 55% chance: common tier (20-30k)
            const common = [20, 22, 24, 26, 28, 30];
            amount = common[Math.floor(Math.random() * common.length)];
        }

        return amount * 1000;
    }

    async getStatus(token: string) {
        const tokenHash = createHash('sha256').update(token).digest('hex');

        const envelope = await this.prisma.envelope.findUnique({
            where: { tokenHash },
            include: {
                campaign: {
                    select: { name: true, status: true, endAt: true },
                },
            },
        });

        if (!envelope) {
            throw new NotFoundException('Lì xì không tồn tại hoặc đã hết hạn');
        }

        // Check expired
        if (envelope.expiresAt && new Date() > envelope.expiresAt) {
            return {
                status: 'expired',
                message: 'Lì xì đã hết hạn rồi 😢',
            };
        }

        // Check campaign closed
        if (envelope.campaign.status !== 'active') {
            return {
                status: 'closed',
                message: 'Chiến dịch đã kết thúc',
            };
        }

        if (envelope.status === 'claimed') {
            return {
                status: 'claimed',
                amount: envelope.amount,
                wish: envelope.wish,
                claimedAt: envelope.claimedAt,
                campaignName: envelope.campaign.name,
                recipientBank: envelope.recipientBank,
                recipientAccount: envelope.recipientAccount,
                recipientName: envelope.recipientName,
            };
        }

        return {
            status: 'unused',
            campaignName: envelope.campaign.name,
        };
    }

    async claim(token: string, ip?: string) {
        const tokenHash = createHash('sha256').update(token).digest('hex');

        // Use a transaction for atomicity
        return this.prisma.$transaction(async (tx) => {
            // Find and lock the envelope
            const envelope = await tx.envelope.findUnique({
                where: { tokenHash },
                include: {
                    campaign: true,
                },
            });

            if (!envelope) {
                throw new NotFoundException('Lì xì không tồn tại');
            }

            if (envelope.status === 'claimed') {
                throw new ConflictException('Lì xì đã được mở rồi! 🎉');
            }

            if (envelope.expiresAt && new Date() > envelope.expiresAt) {
                throw new BadRequestException('Lì xì đã hết hạn 😢');
            }

            if (envelope.campaign.status !== 'active') {
                throw new BadRequestException('Chiến dịch đã kết thúc');
            }

            if (envelope.campaign.endAt && new Date() > envelope.campaign.endAt) {
                throw new BadRequestException('Chiến dịch đã hết hạn');
            }

            // Generate amount
            let amount = this.generateAmount();

            // Budget check
            const budgetRemaining = envelope.campaign.budgetTotal - envelope.campaign.budgetUsed;
            if (budgetRemaining <= 0) {
                throw new BadRequestException('Hết lộc rồi bạn ơi! 😅');
            }

            if (amount > budgetRemaining) {
                // Clamp to minimum or remaining budget
                amount = Math.min(20000, budgetRemaining);
            }

            const wish = getRandomWish();

            // Atomic update: only update if still unused
            const updated = await tx.envelope.updateMany({
                where: {
                    tokenHash,
                    status: 'unused',
                },
                data: {
                    status: 'claimed',
                    amount,
                    wish,
                    claimedAt: new Date(),
                    claimedIp: ip || null,
                },
            });

            if (updated.count === 0) {
                throw new ConflictException('Lì xì đã được mở rồi! 🎉');
            }

            // Update campaign budget
            await tx.campaign.update({
                where: { id: envelope.campaignId },
                data: {
                    budgetUsed: { increment: amount },
                },
            });

            return {
                amount,
                amountFormatted: new Intl.NumberFormat('vi-VN').format(amount) + 'đ',
                wish,
                campaignName: envelope.campaign.name,
            };
        });
    }

    async submitRecipientInfo(token: string, data: { bank: string; account: string; name: string }) {
        const tokenHash = createHash('sha256').update(token).digest('hex');

        const envelope = await this.prisma.envelope.findUnique({
            where: { tokenHash },
        });

        if (!envelope) {
            throw new NotFoundException('Lì xì không tồn tại');
        }

        if (envelope.status !== 'claimed') {
            throw new BadRequestException('Lì xì chưa được mở');
        }

        if (envelope.recipientBank) {
            throw new ConflictException('Thông tin nhận tiền đã được gửi rồi');
        }

        await this.prisma.envelope.update({
            where: { tokenHash },
            data: {
                recipientBank: data.bank,
                recipientAccount: data.account,
                recipientName: data.name,
            },
        });

        return { success: true, message: 'Đã gửi thông tin nhận tiền thành công!' };
    }
}
