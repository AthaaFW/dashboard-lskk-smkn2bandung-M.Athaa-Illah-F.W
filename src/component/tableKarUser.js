import React from 'react';
import Card from './card';


const TableSis = ({open}) => {

    const nama = "Udin"

    return ( 
        <div className={open?"flex flex-col items-center mt-4 space-y-10 w-full":"hidden"}>
            <h1 className='text-7xl text-blueSec'>KARYAWAN</h1>
            <div className='w-full flex flex-row justify-around'>
                <Card nama={nama}/>
                <Card nama={nama}/>
                <Card nama={nama}/>
                <Card nama={nama}/>
            </div>
            <div className='w-full flex flex-row justify-around'>
                <Card nama={nama}/>
                <Card nama={nama}/>
                <Card nama={nama}/>
                <Card nama={nama}/>
            </div>
            <div className='w-full flex flex-row justify-around'>
                <Card nama={nama}/>
                <Card nama={nama}/>
                <Card nama={nama}/>
                <Card nama={nama}/>
            </div>
            <div className='w-full flex flex-row justify-around'>
                <Card nama={nama}/>
                <Card nama={nama}/>
                <Card nama={nama}/>
                <Card nama={nama}/>
            </div>
        </div>
     );
}
 
export default TableSis;