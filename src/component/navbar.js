import profImg from '../asset/images.jpg';
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = ({onClick, open, onProf, onHome}) => {
    return ( 
        <div className={onHome?"flex flex-row w-full fixed bg-blackTrans text-whiteSnow justify-between p-3 pl-6 pr-11 z-50 top-0 left-0 items-center":"flex flex-row w-full fixed bg-blueSec text-whiteSnow justify-between p-3 pl-6 pr-11 z-50 top-0 left-0 items-center shadow-lg"}>
            <Hamburger toggle={onClick} toggled={open} direction='right' size={25}/>
            <div className="flex flex-row items-center space-x-3">
            <h1 className="text-xl">Username Name</h1>
            <img src={profImg} alt="" className='profile rounded-full cursor-pointer' onClick={onProf}/>
            </div>
        </div>
     );
}
 
export default Navbar;