import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto, GenerateEnvelopesDto } from './dto/campaigns.dto';
import type { Request } from 'express';
export declare class CampaignsController {
    private readonly campaignsService;
    constructor(campaignsService: CampaignsService);
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
    generateEnvelopes(id: number, dto: GenerateEnvelopesDto, req: Request): Promise<{
        token: string;
        url: string;
    }[]>;
}
