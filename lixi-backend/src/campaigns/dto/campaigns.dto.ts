import { IsString, IsInt, IsOptional, Min, IsDateString } from 'class-validator';

export class CreateCampaignDto {
    @IsString()
    name: string;

    @IsInt()
    @Min(1000) // min 1k VND
    budgetTotal: number;

    @IsOptional()
    @IsDateString()
    startAt?: string;

    @IsOptional()
    @IsDateString()
    endAt?: string;
}

export class GenerateEnvelopesDto {
    @IsInt()
    @Min(1)
    quantity: number;
}
