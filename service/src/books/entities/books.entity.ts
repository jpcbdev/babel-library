import { Entity, PrimaryColumn } from 'typeorm';

@Entity({
    name: 'books',
    schema: 'oc_book'
})

export class BooksEntity {
    @PrimaryColumn()
    book_id: number;
    title: string;
    quantity: number;
    location_id: number;
    room: number;
    shelf: number;
    position: number;
    seller: string;
}