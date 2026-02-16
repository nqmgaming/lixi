import { PrismaService } from '../prisma/prisma.service';
import { CreateCampaignDto } from './dto/campaigns.dto';
export declare class CampaignsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCampaignDto): Promise<{
        id: number;
        name: string;
        budgetTotal: number;
        budgetUsed: number;
        startAt: Date;
        endAt: Date | null;
        status: string;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        _count: {
            envelopes: number;
        };
    } & {
        id: number;
        name: string;
        budgetTotal: number;
        budgetUsed: number;
        startAt: Date;
        endAt: Date | null;
        status: string;
        createdAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        stats: {
            total: number;
            claimed: number;
            unused: number;
            budgetRemaining: number;
        };
        envelopes: {
            id: number;
            status: string;
            createdAt: Date;
            amount: number | null;
            claimedAt: Date | null;
        }[];
        _count: {
            envelopes: number;
        };
        id: number;
        name: string;
        budgetTotal: number;
        budgetUsed: number;
        startAt: Date;
        endAt: Date | null;
        status: string;
        createdAt: Date;
    }>;
    generateEnvelopes(campaignId: number, quantity: number, baseUrl: string): Promise<{
        token: string;
        url: string;
    }[]>;
}
