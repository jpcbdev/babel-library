import React from 'react';
import { useTable, usePagination } from 'react-table';

export const Table = ({ columns, data, rowByPage }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        prepareRow,
        setPageSize,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageSize: rowByPage || 10,
                pageIndex: 0
            },
            autoResetPage: false,
        },
        usePagination
    )
    return (< div className='table-responsive mt-4' >
        <table className='table' {...getTableProps()}>
            <thead className='thead-dark'>
                {headerGroups.map(headerGroup => (
                    <tr className='text-dark' {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>
                                    <small>
                                        {cell.render('Cell')}
                                    </small>
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className='pagination'>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>{' '}
            <span className='text-dark ms-2'>
                {' Página '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
        </div>
    </div>
    )
}