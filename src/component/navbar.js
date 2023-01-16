import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import profImg from '../asset/images.jpg';

const Navbar = ({onClick, open, onProf}) => {
    return ( 
        <div className="flex flex-row w-full  bg-blueMain text-whiteSnow justify-between p-3 pl-6 pr-11 z-50 items-center">
            <h1 className="text-xl cursor-pointer" onClick={onClick}><GiHamburgerMenu/></h1>
            <div className="flex flex-row items-center space-x-3">
            <h1 className="text-xl">Username Name</h1>
            <img src={profImg} alt="" className='profile rounded-full cursor-pointer' onClick={onProf}/>
            </div>
        </div>
     );
}
 
export default Navbar;