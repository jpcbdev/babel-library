import { BadRequestException, Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { CREATE_BOOK_QUERY, DELETE_BOOK_QUERY, GET_BOOKS_QUERY, UPDATE_BOOK_QUERY } from '../shared/constants';

import { BooksEntity } from './entities/books.entity';
import { CreateBookDto, UpdateBookDto } from './dtos';

@Injectable()
export class BooksService {

    constructor(private readonly booksRepository: BooksRepository) { }

    async getBooks(): Promise<BooksEntity[]> {
        const sql = GET_BOOKS_QUERY;
        const query = await this.booksRepository.get(sql);
        return query;
    }

    async createBook(dto: CreateBookDto): Promise<void> {
        const sql = CREATE_BOOK_QUERY;
        await this.booksRepository.mutate(sql, [dto.title, dto.quantity, dto.location_id]);
    }

    async updateBook(dto: UpdateBookDto): Promise<void> {
        const sql = UPDATE_BOOK_QUERY;
        const query = await this.booksRepository.mutate(sql, [dto.title, dto.quantity, dto.id]);
        this.checkQueryStatus(query);
    }

    async deleteBook(id: number): Promise<void> {
        const sql = DELETE_BOOK_QUERY;
        const query = await this.booksRepository.mutate(sql, [id]);
        this.checkQueryStatus(query);
    }

    private checkQueryStatus(query: any): void {
        if (query?.affectedRows === 0) throw new BadRequestException('No existe ningún libro con el id ingresado');
    }

}
