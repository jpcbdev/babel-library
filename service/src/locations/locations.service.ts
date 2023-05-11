import { BadRequestException, Injectable } from '@nestjs/common';
import { LocationsRepository } from './locations.repository';
import { CREATE_LOCATION_QUERY, DELETE_LOCATION_QUERY, GET_LOCATIONS_QUERY, UPDATE_LOCATION_QUERY } from '../shared/constants';

import { LocationsEntity } from './entities/location.entity';
import { CreateLocationDto, UpdateLocationDto } from './dtos';

@Injectable()
export class LocationsService {

    constructor(private readonly locationsRepository: LocationsRepository) { }

    async getLocations(): Promise<LocationsEntity[]> {
        const sql = GET_LOCATIONS_QUERY;
        const query = await this.locationsRepository.get(sql);
        return query;
    }

    async createLocation(dto: CreateLocationDto): Promise<void> {
        const sql = CREATE_LOCATION_QUERY;
        await this.locationsRepository.mutate(sql, [dto.room, dto.shelf, dto.position, dto.seller]);
    }

    async updateLocation(dto: UpdateLocationDto): Promise<void> {
        const sql = UPDATE_LOCATION_QUERY;
        const query = await this.locationsRepository.mutate(sql, [dto.seller, dto.id]);
        this.checkQueryStatus(query);
    }

    async deleteLocation(id: number): Promise<void> {
        const sql = DELETE_LOCATION_QUERY;
        const query = await this.locationsRepository.mutate(sql, [id]);
        this.checkQueryStatus(query);
    }

    private checkQueryStatus(query: any): void {
        if (query?.affectedRows === 0) throw new BadRequestException('No existe ninguna ubicación con el id ingresado');
    }

}
