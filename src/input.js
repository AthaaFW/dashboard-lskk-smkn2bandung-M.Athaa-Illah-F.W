import { Link } from "react-router-dom";

const Edit = () => {
    return ( 
        <div className="flex flex-row justify-center items-center w-screen h-screen bg-blueMain" id="Form">
            <div className="flex flex-col  bg-white mx-auto justify-center items-center rounded shadow-lg  space-y-5 w-fit">
                <div className="flex p-5 justify-center items-center bg-gray-300 w-full rounded-t text-gray-700">
                <h1 className="text-xl font-bold">EDIT DATA</h1>
                </div>
                <div className="flex flex-col text-gray-500 p-2 w-full">
                    <form action="/App" className="w-full flex flex-row space-x-10 px-5">
                        <div className="flex flex-col">
                        <label htmlFor="" className="flex flex-col">
                            <h1>NAMA</h1>
                            <input type="text" className="px-1 border-gray-300 border-2 rounded focus:outline-none focus:border-blueSec"/>
                        </label>
                        <label htmlFor="" className="flex flex-col">
                            <h1>E-MAIL</h1>
                            <input type="text" className="px-1 border-gray-300 border-2 rounded focus:outline-none focus:border-blueSec"/>
                            
                        <label htmlFor="" className="flex flex-col">
                            <h1>ALAMAT</h1>
                            <textarea name="" id="" cols="30" rows="5" className="px-1 text-area border-gray-300 border-2 rounded focus:outline-none focus:border-blueSec"></textarea>
                        </label>
                        </label>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div htmlFor="" className="flex flex-col  space-y-2">
                                <h1>STATUS</h1>
                                <hr />
                                <label htmlFor="" className="space-x-3 flex flex-row items-center">
                            <input type="radio" name="status" id="" value='karyawan'/>
                                <h2 className="text-sm">Karyawan</h2>
                                </label>
                                <label htmlFor="" className="space-x-3 flex flex-row items-center">
                            <input type="radio" name="status" id="" value='karyawan'/>
                                <h2 className="text-sm">Siswa</h2>
                                </label>
                                <label htmlFor="" className="space-x-3 flex flex-row items-center">
                            <input type="radio" name="status" id="" value='karyawan'/>
                                <h2 className="text-sm">Guru</h2>
                                </label>
                            </div>
                            <label htmlFor="" className="flex flex-col">
                                <h1>NIK/NISN</h1>
                                <input type="text" className="px-1 border-gray-300 border-2 rounded focus:outline-none focus:border-blueSec"/>
                            </label>
                            <div className="flex flex-row justify-between w-full">
                                <input type="submit" value="SUBMIT" className="px-2 bg-blueMain rounded text-white font-semibold"/>
                                <Link to='/App'  className="px-2 bg-red-600 rounded text-white font-semibold">CANCEL</Link>
                            </div>
                        </div>
                        
                    </form>
                    <div className="flex justify-center items-center p-5 text-center">
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Edit;