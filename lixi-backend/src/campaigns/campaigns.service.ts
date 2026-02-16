import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCampaignDto } from './dto/campaigns.dto';
import { randomBytes, createHash } from 'crypto';

@Injectable()
export class CampaignsService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateCampaignDto) {
        return this.prisma.campaign.create({
            data: {
                name: dto.name,
                budgetTotal: dto.budgetTotal,
                startAt: dto.startAt ? new Date(dto.startAt) : new Date(),
                endAt: dto.endAt ? new Date(dto.endAt) : null,
            },
        });
    }

    async findAll() {
        return this.prisma.campaign.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: { envelopes: true },
                },
            },
        });
    }

    async findOne(id: number) {
        const campaign = await this.prisma.campaign.findUnique({
            where: { id },
            include: {
                _count: {
                    select: { envelopes: true },
                },
                envelopes: {
                    select: {
                        id: true,
                        status: true,
                        amount: true,
                        claimedAt: true,
                        createdAt: true,
                    },
                    orderBy: { createdAt: 'desc' },
                },
            },
        });

        if (!campaign) {
            throw new NotFoundException('Campaign not found');
        }

        const claimedCount = campaign.envelopes.filter(e => e.status === 'claimed').length;

        return {
            ...campaign,
            stats: {
                total: campaign.envelopes.length,
                claimed: claimedCount,
                unused: campaign.envelopes.length - claimedCount,
                budgetRemaining: campaign.budgetTotal - campaign.budgetUsed,
            },
        };
    }

    async generateEnvelopes(campaignId: number, quantity: number, baseUrl: string) {
        const campaign = await this.prisma.campaign.findUnique({
            where: { id: campaignId },
        });

        if (!campaign) {
            throw new NotFoundException('Campaign not found');
        }

        const tokens: string[] = [];
        const envelopeData: { campaignId: number; tokenHash: string; expiresAt: Date }[] = [];

        for (let i = 0; i < quantity; i++) {
            const token = randomBytes(32).toString('base64url');
            const tokenHash = createHash('sha256').update(token).digest('hex');

            tokens.push(token);
            envelopeData.push({
                campaignId,
                tokenHash,
                expiresAt: campaign.endAt || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days default
            });
        }

        // Batch insert  
        await this.prisma.envelope.createMany({
            data: envelopeData,
        });

        return tokens.map(token => ({
            token,
            url: `${baseUrl}/e/${token}`,
        }));
    }
}
