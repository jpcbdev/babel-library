import { IsInt, IsOptional, IsString, Min } from 'class-validator';
import { ByIdDto } from '../../shared/dtos';

export class UpdateBookDto extends ByIdDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsInt()
    @Min(1)
    @IsOptional()
    quantity: number;
}