import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class ByIdDto {
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    id: number;
}