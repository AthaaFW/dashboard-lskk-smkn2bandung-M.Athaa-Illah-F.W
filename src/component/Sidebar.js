import {BsFillBriefcaseFill} from 'react-icons/bs';
import {GiSchoolBag} from 'react-icons/gi';
import {GiTeacher} from 'react-icons/gi';
import {IoHomeSharp} from 'react-icons/io5'

const Sidebar = ({open, onClick, onTabKarClick, onTabSisClick, onTabGurClick, onTabGur, onTabKar,onTabSis, onHomeClick, onHome}) => {
    return ( 
        <div className={open?(onHome?"sidebar close h-full z-40 bg-black":"sidebar close h-full z-40 bg-white"):"sidebar h-full z-40 bg-transparent"}>
            <ul className="flex flex-col pt-16">
                <h1 className="text-3xl font-bold p-5">Menu</h1>
                <li className={onHome?"active p-5":"p-5"} onClick={onHomeClick}><a href="#" className="text-lg flex flex-row gap-5 items-center"><IoHomeSharp/>Home</a></li>
                <li className={onTabKar?"active p-5":"p-5"} onClick={onTabKarClick}><a href="#" className="text-lg flex flex-row gap-5 items-center"><BsFillBriefcaseFill/> Karyawan</a></li>
                <li className={onTabSis?"active p-5":"p-5"} onClick={onTabSisClick}><a href="#" className="text-lg flex flex-row gap-5 items-center"><GiSchoolBag/> Siswa</a></li>
                <li className={onTabGur?"active p-5":"p-5"} onClick={onTabGurClick}><a href="#" className="text-lg flex flex-row gap-5 items-center"><GiTeacher/> Guru</a></li>
            </ul>
        </div>
     );
}
 
export default Sidebar;