import { Controller, Get, Post, Param, Req, Body } from '@nestjs/common';
import { EnvelopesService } from './envelopes.service';
import type { Request } from 'express';

@Controller('api/envelopes')
export class EnvelopesController {
    constructor(private readonly envelopesService: EnvelopesService) { }

    @Get(':token')
    async getStatus(@Param('token') token: string) {
        return this.envelopesService.getStatus(token);
    }

    @Post(':token/claim')
    async claim(@Param('token') token: string, @Req() req: Request) {
        const ip = req.ip || req.headers['x-forwarded-for'] as string || 'unknown';
        return this.envelopesService.claim(token, ip);
    }

    @Post(':token/recipient')
    async submitRecipientInfo(
        @Param('token') token: string,
        @Body() body: { bank: string; account: string; name: string },
    ) {
        return this.envelopesService.submitRecipientInfo(token, body);
    }
}
