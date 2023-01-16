import {ImExit} from 'react-icons/im';

const Profile = ({open}) => {
    return ( 
        <div className={open?"absolute text-black top-16 right-0":"hidden"}>
            <ul className="flex flex-col justify-center items-center  shadow-md space-y-3">
                <li className="pr-5 pl-5 pt-2  hover:text-gray-400"><a href="#">Profile</a></li>
                <li className="pr-5 pl-5 hover:text-gray-400"><a href="#">Setting</a></li>
                <li className="flex flex-row items-center space-x-2 pr-5 pl-5 pb-2 text-red-600 hover:text-red-200"><a href="/">Sign Out</a> <ImExit/></li>
            </ul>
        </div>
     );
}
 
export default Profile;