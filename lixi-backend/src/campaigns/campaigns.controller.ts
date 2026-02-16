import {
    Controller,
    Post,
    Get,
    Body,
    Param,
    UseGuards,
    Req,
    ParseIntPipe,
} from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto, GenerateEnvelopesDto } from './dto/campaigns.dto';
import { AdminGuard } from '../guards/admin.guard';
import type { Request } from 'express';

@Controller('api/campaigns')
@UseGuards(AdminGuard)
export class CampaignsController {
    constructor(private readonly campaignsService: CampaignsService) { }

    @Post()
    async create(@Body() dto: CreateCampaignDto) {
        return this.campaignsService.create(dto);
    }

    @Get()
    async findAll() {
        return this.campaignsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.campaignsService.findOne(id);
    }

    @Post(':id/envelopes')
    async generateEnvelopes(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: GenerateEnvelopesDto,
        @Req() req: Request,
    ) {
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        return this.campaignsService.generateEnvelopes(id, dto.quantity, baseUrl);
    }
}
