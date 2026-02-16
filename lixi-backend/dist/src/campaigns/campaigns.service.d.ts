import { PrismaService } from '../prisma/prisma.service';
import { CreateCampaignDto } from './dto/campaigns.dto';
export declare class CampaignsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCampaignDto): Promise<{
        name: string;
        budgetTotal: number;
        startAt: Date;
        endAt: Date | null;
        budgetUsed: number;
        status: string;
        createdAt: Date;
        id: number;
    }>;
    findAll(): Promise<({
        _count: {
            envelopes: number;
        };
    } & {
        name: string;
        budgetTotal: number;
        startAt: Date;
        endAt: Date | null;
        budgetUsed: number;
        status: string;
        createdAt: Date;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        stats: {
            total: number;
            claimed: number;
            unused: number;
            budgetRemaining: number;
        };
        envelopes: {
            status: string;
            createdAt: Date;
            id: number;
            amount: number | null;
            claimedAt: Date | null;
        }[];
        _count: {
            envelopes: number;
        };
        name: string;
        budgetTotal: number;
        startAt: Date;
        endAt: Date | null;
        budgetUsed: number;
        status: string;
        createdAt: Date;
        id: number;
    }>;
    generateEnvelopes(campaignId: number, quantity: number, baseUrl: string): Promise<{
        token: string;
        url: string;
    }[]>;
}
