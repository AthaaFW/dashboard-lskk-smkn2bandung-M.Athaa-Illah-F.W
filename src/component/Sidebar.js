import {ImCross} from 'react-icons/im';

const Sidebar = ({open, onClick, onTabKarClick, onTabSisClick, onTabGurClick, onTabGur, onTabKar,onTabSis}) => {
    return ( 
        <div className={open?"sidebar close":"sidebar"}>
            <h1 className="text-xl cursor-pointer ml-40 mt-6" onClick={onClick}><ImCross/></h1>
            <ul className="flex flex-col pt-20">
                <li className={onTabKar?"active p-5":"p-5"} onClick={onTabKarClick}><a href="#" className="text-xl">Karyawan</a></li>
                <li className={onTabSis?"active p-5":"p-5"} onClick={onTabSisClick}><a href="#" className="text-xl">Siswa</a></li>
                <li className={onTabGur?"active p-5":"p-5"} onClick={onTabGurClick}><a href="#" className="text-xl">Guru</a></li>
            </ul>
        </div>
     );
}
 
export default Sidebar;