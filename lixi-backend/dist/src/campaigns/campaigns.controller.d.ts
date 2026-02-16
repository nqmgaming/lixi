import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto, GenerateEnvelopesDto } from './dto/campaigns.dto';
import type { Request } from 'express';
export declare class CampaignsController {
    private readonly campaignsService;
    constructor(campaignsService: CampaignsService);
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
    generateEnvelopes(id: number, dto: GenerateEnvelopesDto, req: Request): Promise<{
        token: string;
        url: string;
    }[]>;
}
