import { Link } from "react-router-dom";
import draw from "./asset/draw2.svg"


const LoginPage = () => {
    return ( 
        <div className="flex flex-col justify-center items-center w-screen h-screen" id="Form">
            <div className="flex flex-row w-screen justify-center items-center rounded">
                    <img src={draw} alt="" srcset="" className="w-1/3 flex flex-col bg-white"/>
                <div className="flex flex-col text-gray-500 w-1/4">
                    <form action="/App" className="w-full space-y-5 bg-white">
                        <label htmlFor="" className="flex flex-col">
                            <h1>NAMA</h1>
                            <input type="text" className="px-1 border-gray-300 border-2 rounded focus:outline-none focus:border-blueSec"/>
                        </label>
                        <label htmlFor="" className="flex flex-col">
                            <h1>PASSWORD</h1>
                            <input type="password" className="px-1 border-gray-300 border-2 rounded focus:outline-none focus:border-blueSec"/>
                        </label>
                        <input type="submit" value="LOGIN" className="w-full h-10 text-white bg-blueMain rounded font-bold"/>
                        <h1 className="text-gray-500 flex flex-row items-center justify-center">OR</h1>
                        <a href="/AppUser" className="w-full h-10 text-white bg-blueMain rounded font-bold flex flex-row justify-center items-center p-5">LOGIN AS USER</a>
                        <div className="flex justify-center items-center p-5 text-center">
                        <h1>Dont have an account? <Link to="/Register" className="hover:text-blueSec">Click here</Link></h1>
                    </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;