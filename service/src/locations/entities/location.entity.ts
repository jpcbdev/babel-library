import { Entity, PrimaryColumn } from 'typeorm';

@Entity({
    name: 'locations',
    schema: 'oc_location'
})

export class LocationsEntity {
    @PrimaryColumn()
    location_id: number;
    room: number;
    shelf: number;
    position: number;
    seller: string;
}