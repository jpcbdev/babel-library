import { Logger } from '@nestjs/common';
import { DATABASE_CONNECTION, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_TYPE, DATABASE_USER } from '../shared/constants';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => {
      try {
        const connection = await createConnection({
          type: DATABASE_TYPE ,
          host: DATABASE_HOST,
          port: DATABASE_PORT,
          username: DATABASE_USER,
          password: DATABASE_PASSWORD,
          database: DATABASE_NAME,
          entities: [__dirname + '/../**/*.entity.{js,ts}'],
        });
        return connection;
      } catch (error) {
        Logger.error(error);
        throw new Error(error);
      }
    },
  },
];
