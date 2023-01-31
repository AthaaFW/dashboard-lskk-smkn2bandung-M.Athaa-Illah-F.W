import React from 'react';
import {useTable} from 'react-table';
import {FaEdit} from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

const TableSis = ({open}) => {
    const data = React.useMemo(
        () => [
            {
                col1: '01',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '02',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '03',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '04',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '05',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '06',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '07',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '08',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '09',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
            },
            {
                col1: '10',
                col2: 'Guru',
                col3: 'email@gmail.com',
                col4:'Jl. Bandung kota Bandung kecamatan bandung',
                ktp:'1266385728912836',
                col5:'',
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
            },
            {
                Header:'NIK',
                accessor:'ktp',
            },
            {
                Header: 'Action',
                accessor: 'col5',
                Cell : ()=>(<div className='flex flex-row justify-around'><Link to="/Edit"><FaEdit className='mx-auto text-blueSec'/></Link> <BsFillTrashFill className='text-red-700'/></div>)
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
        <div className={open?"flex flex-col items-center justify-center mt-5 space-y-5":"hidden"}>
        <h1 className="text-5xl text-blueSec font-manrope">DATA GURU</h1>
        <div className='rounded-t-lg border-2 border-neutral-300 bg-blueSec'>
        <table className='items-center rounded-lg text-center' {...getTableProps()}>
            <thead className='justify-center text-center items-center text-white'>
                {headerGroups.map(headerGroup => (
                        <tr className='' {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th className='p-5' {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                 </th>
                            ))}
                        </tr>
                    ))
                }
            </thead>
            <tbody className='' {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return(
                                    <td className='p-5 bg-white' {...cell.getCellProps()}>
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
        <a href="/Edit" className='rounded bg-blueSec text-white p-3 bottom-10 right-10 fixed'><FiPlus size={20}/></a>
    </div>
     );
}
 
export default TableSis;