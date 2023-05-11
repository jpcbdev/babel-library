import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

import { BooksRepository } from './books.repository';
import { DatabaseModule } from '../database/database.module';
import { BooksProviders } from './providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService, BooksRepository, ...BooksProviders],
  exports: [BooksService, BooksRepository]
})
export class BooksModule { }
