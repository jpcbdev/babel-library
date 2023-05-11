import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { LIBRARY_REPOSITORY } from '../shared/constants';
import { Repository } from 'typeorm';

import { BooksEntity } from './entities/books.entity';

@Injectable()
export class BooksRepository {

    constructor(@Inject(LIBRARY_REPOSITORY) private readonly libraryRepository: Repository<BooksEntity>) { }

    async get(sql: string, parameters = []): Promise<BooksEntity[]> {
        try {
            const rows: BooksEntity[] = [];
            const query = await this.libraryRepository.query(sql, parameters);
            query.forEach((row: BooksEntity) => { rows.push(row); });
            return rows;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async mutate(sql: string, parameters = []) {
        try {
            const query = await this.libraryRepository.query(sql, parameters);
            return query;
        } catch (error) {
            if (error?.driverError?.errno === 1452) throw new InternalServerErrorException('No existe la localización de referencia');
            if (error?.driverError?.errno === 1048) throw new InternalServerErrorException('Algunos campos no deben estar vacíos');
            throw new InternalServerErrorException(error);
        }
    }
}
