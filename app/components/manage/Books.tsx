import React, { useEffect, useMemo, useState } from 'react';
import { ApiService } from '../../services/api.service';
import { Table } from '../Table';

import { IBook, ILocation } from '../../shared/interfaces';
import { closeModal } from '../../shared/utils';

export const Books = () => {

    const [books, setBooks] = useState([] as IBook[]);
    const [book, setBook] = useState({
        book_id: '',
        title: '',
        quantity: '',
        location_id: '',
        room: '',
        shelf: '',
        position: '',
        seller: ''
    });
    const [locations, setLocations] = useState([] as ILocation[]);
    const [update, setUpdate] = useState(false);
    const [locationId, setLocationId] = useState(0);

    useEffect(() => {
        handleGetLocations();
        handleGetBooks();
    }, []);

    const handleGetBooks = async () => {
        const query = await ApiService.get('/books/get');
        if (query) setBooks(query);
    };

    const handleGetLocations = async () => {
        const query = await ApiService.get('/locations/get');
        if (query) setLocations(query);
    };

    const handleDeleteBook = async (id: string) => {
        const query = await ApiService.delete('/books/delete/one', { id: id });
        if (query) await handleGetBooks();
    };

    const handleCreateBook = async () => {
        const query = await ApiService.post('/books/create', {
            title: book.title,
            quantity: Number.parseInt(book.quantity) ?? 0,
            location_id: locationId
        }, false, true);

        if (query) {
            await handleGetBooks();
            closeModal('#editBookModal');
        };
    };

    const handleUpdateBook = async () => {
        const query = await ApiService.put('/books/update/one', {
            id: Number.parseInt(book.book_id) ?? 0,
            title: book.title,
            quantity: Number.parseInt(book.quantity) ?? 0
        }, false);

        if (query) {
            await handleGetBooks();
            closeModal('#editBookModal');
        };

    };

    const onLocationIdChange = (e) => {
        setLocationId(Number.parseInt(e.target.value));
    };

    const clean = () => {
        setUpdate(false);
        setBook({
            book_id: '',
            title: '',
            quantity: '',
            location_id: '',
            room: '',
            shelf: '',
            position: '',
            seller: ''
        });
        setLocationId(0);
    }

    const columns = useMemo(() =>
        [
            {
                Header: 'ID',
                Footer: 'ID',
                accessor: 'book_id',
                disableFilters: false,
                sticky: 'left',
            },

            {
                Header: 'Título',
                Footer: 'Título',
                accessor: 'title',
                disableFilters: false,
                sticky: 'left',
            },
            {
                Header: 'Cantidad',
                Footer: 'Cantidad',
                accessor: 'quantity',
                disableFilters: false,
                sticky: 'left',
            },

            {
                Header: 'ID de ubicación',
                Footer: 'ID de ubicación',
                accessor: 'location_id',
                disableFilters: false,
                sticky: 'left',
            },
            {
                Header: 'Acciones',
                Footer: 'Acciones',
                sticky: 'left',
                Cell: ({ row }) => (<small >
                    <button
                        id='editBookTrigger'
                        data-bs-toggle='modal'
                        data-bs-target='#editBookModal'
                        className='m-1'
                        onClick={
                            () => {
                                setUpdate(true);
                                setBook(row.original)
                            }}
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className='m-1' onClick={() => handleDeleteBook(row.original.book_id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </small>)
            },
        ], []);

    return <div className='container'>

        {/* Edit modal */}
        <div
            className='modal fade'
            id='editBookModal'
            tabIndex={-1}
            aria-labelledby='editBookModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' aria-label='Close'></button>
                        <h4 className='modal-title' id='editBookModalLabel'>{update ? 'Actualizar libro' : 'Crear libro'}</h4>
                    </div>
                    <div className='modal-body'>

                        <div className='form-group mb-2'>
                            <label htmlFor='title'>Título</label>
                            <input type='text'
                                className='form-control'
                                id='title'
                                value={book.title}
                                onChange={e => setBook({ ...book, title: e.target.value })}
                                placeholder='Ingresa el título del libro'
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <label htmlFor='quantity'>Cantidad</label>
                            <input type='number'
                                className='form-control'
                                id='quantity'
                                value={book.quantity}
                                onChange={e => setBook({ ...book, quantity: e.target.value })}
                                placeholder='Ingresa la cantidad  de libros'
                            />
                        </div>

                        <div className='form-group mb-2' hidden={update}>
                            <label htmlFor='locationId'>ID de ubicación</label>
                            <select id="locationId" onChange={onLocationIdChange} className='w-100'>
                                <option value=""></option>
                                {locations.map((location, index) => <option key={index} value={location.location_id}> {location.location_id} {location.seller}</option>)}
                            </select>
                        </div>

                        <div className='form-group mb-2'>
                            <button type='button' className='nav-link btn btn-action w-100' onClick={update ? handleUpdateBook : handleCreateBook} >Aceptar</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        {/* Trigger modal */}
        <div className='text-end'>
            <button
                className='m-2'
                id='editBookTrigger'
                data-bs-toggle='modal'
                data-bs-target='#editBookModal'
                onClick={() => clean()}
            >
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        {books.length ? <Table columns={columns} data={books} rowByPage={10}></Table> :
            <div className='no-results-container'>
                <h1 className='no-results-icon'>
                    <i className='far fa-file'></i>
                </h1>
                <h6>No existen registros</h6>
            </div>}
    </div>
}