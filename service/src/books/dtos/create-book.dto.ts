import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    quantity: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    location_id: number;
}