import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';

import { LocationsRepository } from './locations.repository';
import { DatabaseModule } from '../database/database.module';
import { LocationsProviders } from './providers';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationsController],
  providers: [LocationsService, LocationsRepository, ...LocationsProviders],
  exports: [LocationsService, LocationsRepository]
})
export class LocationsModule { }
