"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvelopesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const crypto_1 = require("crypto");
const wishes_1 = require("../data/wishes");
let EnvelopesService = class EnvelopesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    generateAmount() {
        const r = Math.random();
        let amount;
        if (r < 0.03) {
            amount = 50;
        }
        else if (r < 0.15) {
            const higher = [40, 42, 44, 46, 48];
            amount = higher[Math.floor(Math.random() * higher.length)];
        }
        else if (r < 0.45) {
            const mid = [32, 34, 36, 38];
            amount = mid[Math.floor(Math.random() * mid.length)];
        }
        else {
            const common = [20, 22, 24, 26, 28, 30];
            amount = common[Math.floor(Math.random() * common.length)];
        }
        return amount * 1000;
    }
    async getStatus(token) {
        const tokenHash = (0, crypto_1.createHash)('sha256').update(token).digest('hex');
        const envelope = await this.prisma.envelope.findUnique({
            where: { tokenHash },
            include: {
                campaign: {
                    select: { name: true, status: true, endAt: true },
                },
            },
        });
        if (!envelope) {
            throw new common_1.NotFoundException('Lì xì không tồn tại hoặc đã hết hạn');
        }
        if (envelope.expiresAt && new Date() > envelope.expiresAt) {
            return {
                status: 'expired',
                message: 'Lì xì đã hết hạn rồi 😢',
            };
        }
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
    async claim(token, ip) {
        const tokenHash = (0, crypto_1.createHash)('sha256').update(token).digest('hex');
        return this.prisma.$transaction(async (tx) => {
            const envelope = await tx.envelope.findUnique({
                where: { tokenHash },
                include: {
                    campaign: true,
                },
            });
            if (!envelope) {
                throw new common_1.NotFoundException('Lì xì không tồn tại');
            }
            if (envelope.status === 'claimed') {
                throw new common_1.ConflictException('Lì xì đã được mở rồi! 🎉');
            }
            if (envelope.expiresAt && new Date() > envelope.expiresAt) {
                throw new common_1.BadRequestException('Lì xì đã hết hạn 😢');
            }
            if (envelope.campaign.status !== 'active') {
                throw new common_1.BadRequestException('Chiến dịch đã kết thúc');
            }
            if (envelope.campaign.endAt && new Date() > envelope.campaign.endAt) {
                throw new common_1.BadRequestException('Chiến dịch đã hết hạn');
            }
            let amount = this.generateAmount();
            const budgetRemaining = envelope.campaign.budgetTotal - envelope.campaign.budgetUsed;
            if (budgetRemaining <= 0) {
                throw new common_1.BadRequestException('Hết lộc rồi bạn ơi! 😅');
            }
            if (amount > budgetRemaining) {
                amount = Math.min(20000, budgetRemaining);
            }
            const wish = (0, wishes_1.getRandomWish)();
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
                throw new common_1.ConflictException('Lì xì đã được mở rồi! 🎉');
            }
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
    async submitRecipientInfo(token, data) {
        const tokenHash = (0, crypto_1.createHash)('sha256').update(token).digest('hex');
        const envelope = await this.prisma.envelope.findUnique({
            where: { tokenHash },
        });
        if (!envelope) {
            throw new common_1.NotFoundException('Lì xì không tồn tại');
        }
        if (envelope.status !== 'claimed') {
            throw new common_1.BadRequestException('Lì xì chưa được mở');
        }
        if (envelope.recipientBank) {
            throw new common_1.ConflictException('Thông tin nhận tiền đã được gửi rồi');
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
};
exports.EnvelopesService = EnvelopesService;
exports.EnvelopesService = EnvelopesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EnvelopesService);
//# sourceMappingURL=envelopes.service.js.map