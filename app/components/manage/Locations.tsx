import React, { useEffect, useMemo, useState } from 'react';
import { ApiService } from '../../services/api.service';
import { Table } from '../Table';

import { closeModal } from '../../shared/utils';
import { ILocation } from '../../shared/interfaces';

export const Locations = () => {

    const [locations, setLocations] = useState([] as ILocation[]);
    const [update, setUpdate] = useState(false);
    const [location, setLocation] = useState({
        location_id: '',
        room: '',
        shelf: '',
        position: '',
        seller: '',
    });

    useEffect(() => { handleGetLocations(); }, []);

    const handleGetLocations = async () => {
        const query = await ApiService.get('/locations/get');
        if (query) setLocations(query);
    };

    const handleCreateLocation = async () => {
        const query = await ApiService.post('/locations/create', {
            room: Number.parseInt(location.room) ?? 0,
            shelf: Number.parseInt(location.shelf) ?? 0,
            position: Number.parseInt(location.position) ?? 0,
            seller: location.seller,
        }, false, true);

        if (query) {
            await handleGetLocations();
            closeModal('#editLocationModal');
        };
    };

    const handleUpdateLocation = async () => {

        const query = await ApiService.put('/locations/update/one', {
            id: Number.parseInt(location.location_id),
            seller: location.seller,
        }, false);

        if (query) {
            await handleGetLocations();
            closeModal('#editLocationModal');
        };

    };

    const handleDeleteLocation = async (id: string) => {
        const query = await ApiService.delete('/locations/delete/one', { id: id });
        if (query) await handleGetLocations();
    };

    const clean = () => {
        setUpdate(false);
        setLocation({
            location_id: '',
            room: '',
            shelf: '',
            position: '',
            seller: '',
        });
    }

    const columns = useMemo(() =>
        [
            {
                Header: 'ID',
                Footer: 'ID',
                accessor: 'location_id',
                disableFilters: false,
                sticky: 'left',
            },

            {
                Header: 'Sala',
                Footer: 'Sale',
                accessor: 'room',
                disableFilters: false,
                sticky: 'left',
            },
            {
                Header: 'Estante',
                Footer: 'Estante',
                accessor: 'shelf',
                disableFilters: false,
                sticky: 'left',
            },
            {
                Header: 'Posición',
                Footer: 'Posición',
                accessor: 'position',
                disableFilters: false,
                sticky: 'left',
            },
            {
                Header: 'Encargado',
                Footer: 'Encargado',
                accessor: 'seller',
                disableFilters: false,
                sticky: 'left',
            },
            {
                Header: 'Acciones',
                Footer: 'Acciones',
                sticky: 'left',
                Cell: ({ row }) => (<small >
                    <button
                        id='editLocationTrigger'
                        data-bs-toggle='modal'
                        data-bs-target='#editLocationModal'
                        className='m-1'
                        onClick={
                            () => {
                                setUpdate(true);
                                setLocation(row.original)
                            }}
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className='m-1' onClick={() => handleDeleteLocation(row.original.location_id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </small>)
            },
        ], []);

    return <div className='container'>

        {/* Edit modal */}
        <div
            className='modal fade'
            id='editLocationModal'
            tabIndex={-1}
            aria-labelledby='editLocationModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' aria-label='Close'></button>
                        <h4 className='modal-title' id='editLocationModalLabel'>{update ? 'Actualizar ubicación' : 'Crear ubicación'}</h4>
                    </div>
                    <div className='modal-body'>

                        <div className='form-group mb-2' hidden={update}>
                            <label htmlFor='room' >Sala</label>
                            <input type='number'
                                className='form-control'
                                id='room'
                                value={location.room}
                                onChange={e => setLocation({ ...location, room: e.target.value })}
                                placeholder='Ingresa el número de sala'
                            />
                        </div>

                        <div className='form-group mb-2' hidden={update}>
                            <label htmlFor='shelf' >Estante</label>
                            <input type='number'
                                className='form-control'
                                id='shelf'
                                value={location.shelf}
                                onChange={e => setLocation({ ...location, shelf: e.target.value })}
                                placeholder='Ingresa el número de estante'
                            />
                        </div>

                        <div className='form-group mb-2' hidden={update}>
                            <label htmlFor='position' >Posición</label>
                            <input type='number'
                                className='form-control'
                                id='position'
                                value={location.position}
                                onChange={e => setLocation({ ...location, position: e.target.value })}
                                placeholder='Ingresa el número de posición'
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <label htmlFor='seller' >Encargado</label>
                            <input type='text'
                                className='form-control'
                                id='seller'
                                value={location.seller}
                                onChange={e => setLocation({ ...location, seller: e.target.value })}
                                placeholder='Ingresa el nombre del encargado'
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <button type='button' className='nav-link btn btn-action w-100' onClick={update ? handleUpdateLocation : handleCreateLocation} >Aceptar</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        {/* Trigger modal */}
        <div className='text-end'>
            <button
                className='m-2'
                id='editLocationTrigger'
                data-bs-toggle='modal'
                data-bs-target='#editLocationModal'
                onClick={() => clean()}
            >
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        {locations.length ? <Table columns={columns} data={locations} rowByPage={10}></Table> :
            <div className='no-results-container'>
                <h1 className='no-results-icon'>
                    <i className='far fa-file'></i>
                </h1>
                <h6>No existen registros</h6>
            </div>}

    </div>
}