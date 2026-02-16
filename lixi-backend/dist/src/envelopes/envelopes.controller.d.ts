import { EnvelopesService } from './envelopes.service';
import type { Request } from 'express';
export declare class EnvelopesController {
    private readonly envelopesService;
    constructor(envelopesService: EnvelopesService);
    getStatus(token: string): Promise<{
        status: string;
        message: string;
        amount?: undefined;
        wish?: undefined;
        claimedAt?: undefined;
        campaignName?: undefined;
        recipientBank?: undefined;
        recipientAccount?: undefined;
        recipientName?: undefined;
    } | {
        status: string;
        amount: number | null;
        wish: string | null;
        claimedAt: Date | null;
        campaignName: string;
        recipientBank: string | null;
        recipientAccount: string | null;
        recipientName: string | null;
        message?: undefined;
    } | {
        status: string;
        campaignName: string;
        message?: undefined;
        amount?: undefined;
        wish?: undefined;
        claimedAt?: undefined;
        recipientBank?: undefined;
        recipientAccount?: undefined;
        recipientName?: undefined;
    }>;
    claim(token: string, req: Request): Promise<{
        amount: number;
        amountFormatted: string;
        wish: string;
        campaignName: string;
    }>;
    submitRecipientInfo(token: string, body: {
        bank: string;
        account: string;
        name: string;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
}
