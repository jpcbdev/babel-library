import { Connection } from 'typeorm';
import { LIBRARY_REPOSITORY, DATABASE_CONNECTION } from '../../shared/constants';
import { LocationsEntity } from '../entities/location.entity';

export const LocationsProviders = [
  {
    provide: LIBRARY_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(LocationsEntity),
    inject: [DATABASE_CONNECTION],
  },
];
