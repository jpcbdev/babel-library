import { IsOptional, IsString } from 'class-validator';
import { ByIdDto } from '../../shared/dtos';

export class UpdateLocationDto extends ByIdDto {
    @IsString()
    @IsOptional()
    seller: string;
}