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
exports.CampaignsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const crypto_1 = require("crypto");
let CampaignsService = class CampaignsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
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
    async findOne(id) {
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
            throw new common_1.NotFoundException('Campaign not found');
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
    async generateEnvelopes(campaignId, quantity, baseUrl) {
        const campaign = await this.prisma.campaign.findUnique({
            where: { id: campaignId },
        });
        if (!campaign) {
            throw new common_1.NotFoundException('Campaign not found');
        }
        const tokens = [];
        const envelopeData = [];
        for (let i = 0; i < quantity; i++) {
            const token = (0, crypto_1.randomBytes)(32).toString('base64url');
            const tokenHash = (0, crypto_1.createHash)('sha256').update(token).digest('hex');
            tokens.push(token);
            envelopeData.push({
                campaignId,
                tokenHash,
                expiresAt: campaign.endAt || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            });
        }
        await this.prisma.envelope.createMany({
            data: envelopeData,
        });
        return tokens.map(token => ({
            token,
            url: `${baseUrl}/e/${token}`,
        }));
    }
};
exports.CampaignsService = CampaignsService;
exports.CampaignsService = CampaignsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CampaignsService);
//# sourceMappingURL=campaigns.service.js.map