import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BooksModule } from './books/books.module';

import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'app/out'),
    }),
    BooksModule,
    LocationsModule,
  ],
  controllers: [AppController],
})
export class AppModule { }