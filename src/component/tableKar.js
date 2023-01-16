import React from 'react';
import {useTable} from 'react-table';

const TableKar = ({ open }) => {
    const data = React.useMemo(
        () => [
            {
                col1: '01',
                col2: 'udin',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
            },
            {
                col1: '02',
                col2: 'udin',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
            },
            {
                col1: '03',
                col2: 'udin',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
            },
        ],
        []
    )
    
    const columns = React.useMemo(
        () => [
            {
                Header: 'No',
                accessor: 'col1',
            },
            {
                Header: 'Nama',
                accessor: 'col2',
            },
            {
                Header: 'E-mail',
                accessor: 'col3',
            },
            {
                Header: 'Alamat',
                accessor: 'col4',
            }
        ],
        []
    )
    
    const tableInstance = useTable({columns, data})
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance


    return ( 
        <div className={open?"ml-80 mt-24":"hidden"}>
            <table className='items-center text-center border-2 border-black' {...getTableProps()}>
                <thead className='justify-center text-center items-center border-b-2 border-black'>
                    {headerGroups.map(headerGroup => (
                            <tr  {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th className='p-5 border-2 border-black' {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                     </th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return(
                                        <td className='p-5 border-2 border-neutral-500' {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default TableKar;