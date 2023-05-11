import { Connection } from 'typeorm';
import { LIBRARY_REPOSITORY, DATABASE_CONNECTION } from '../../shared/constants';
import { BooksEntity } from '../entities/books.entity';

export const BooksProviders = [
  {
    provide: LIBRARY_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(BooksEntity),
    inject: [DATABASE_CONNECTION],
  },
];
