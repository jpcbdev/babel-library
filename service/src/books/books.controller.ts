import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksEntity } from './entities/books.entity';

import { CreateBookDto, UpdateBookDto } from './dtos';
import { ByIdDto } from '../shared/dtos';
import { DEFAULT_HTTP_RESPONSE } from '../shared/constants';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Get('/get')
    async getBooks(): Promise<BooksEntity[]> {
        const books = await this.booksService.getBooks();
        return books;
    }

    @Post('/create')
    async createBook(@Body() dto: CreateBookDto) {
        await this.booksService.createBook(dto);
        return DEFAULT_HTTP_RESPONSE;

    }

    @Put('/update/one')
    async updateBook(@Body() dto: UpdateBookDto) {
        await this.booksService.updateBook(dto);
        return DEFAULT_HTTP_RESPONSE;
    }

    @Delete('/delete/one')
    async deleteBook(@Body() dto: ByIdDto) {
        await this.booksService.deleteBook(dto.id);
        return DEFAULT_HTTP_RESPONSE;
    }

}



