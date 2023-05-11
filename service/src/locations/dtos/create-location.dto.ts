import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateLocationDto {
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    room: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    position: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    shelf: number;

    @IsString()
    @IsNotEmpty()
    seller: string;
}