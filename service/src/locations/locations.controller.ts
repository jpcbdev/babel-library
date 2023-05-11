import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsEntity } from './entities/location.entity';

import { CreateLocationDto, UpdateLocationDto } from './dtos';
import { ByIdDto } from '../shared/dtos';
import { DEFAULT_HTTP_RESPONSE } from '../shared/constants';

@Controller('locations')
export class LocationsController {

    constructor(private readonly locationsService: LocationsService) { }

    @Get('/get')
    async getLocations(): Promise<LocationsEntity[]> {
        const locations = await this.locationsService.getLocations();
        return locations;
    }

    @Post('/create')
    async createLocation(@Body() dto: CreateLocationDto) {
        await this.locationsService.createLocation(dto);
        return DEFAULT_HTTP_RESPONSE;

    }

    @Put('/update/one')
    async updateLocation(@Body() dto: UpdateLocationDto) {
        await this.locationsService.updateLocation(dto);
        return DEFAULT_HTTP_RESPONSE;
    }

    @Delete('/delete/one')
    async deleteLocation(@Body() dto: ByIdDto) {
        await this.locationsService.deleteLocation(dto.id);
        return DEFAULT_HTTP_RESPONSE;
    }

}



