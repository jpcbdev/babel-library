export const GET_BOOKS_QUERY = 'SELECT * from oc_book;';
export const CREATE_BOOK_QUERY = 'INSERT INTO oc_book (title, quantity, location_id) VALUES (?,?,?);';
export const UPDATE_BOOK_QUERY = 'UPDATE oc_book SET title=?, quantity=? WHERE book_id=?;';
export const DELETE_BOOK_QUERY = 'DELETE FROM oc_book WHERE book_id=?;';

export const GET_LOCATIONS_QUERY = 'SELECT * from oc_location;';
export const CREATE_LOCATION_QUERY = 'INSERT INTO oc_location (room, shelf, position, seller) VALUES (?,?,?,?);';
export const UPDATE_LOCATION_QUERY = 'UPDATE oc_location SET seller=? WHERE location_id=?;';
export const DELETE_LOCATION_QUERY = 'DELETE FROM oc_location WHERE location_id=?;';