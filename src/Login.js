import { Link } from "react-router-dom";


const LoginPage = () => {
    return ( 
        <div className="flex flex-row justify-center items-center w-screen h-screen bg-blueMain">
            <div className="flex flex-col  bg-white mx-auto justify-center items-center rounded shadow-lg w-80 space-y-5">
                <div className="flex p-5 justify-center items-center bg-gray-300 w-full rounded-t text-gray-700">
                <h1 className="text-xl font-bold">LOGIN PAGE</h1>
                </div>
                <div className="flex flex-col text-gray-500 p-2 w-full">
                    <form action="/App" className="w-full px-2 space-y-5">
                        <label htmlFor="" className="flex flex-col">
                            <h1>NAMA</h1>
                            <input type="text" className="px-1 border-gray-300 border-2 rounded focus:outline-none focus:border-blueSec"/>
                        </label>
                        <label htmlFor="" className="flex flex-col">
                            <h1>PASSWORD</h1>
                            <input type="password" className="px-1 border-gray-300 border-2 rounded focus:outline-none focus:border-blueSec"/>
                        </label>
                        <input type="submit" value="LOGIN" className="w-full h-10 text-white bg-blueMain rounded font-bold"/>
                    </form>
                    <div className="flex justify-center items-center p-5 text-center">
                        <h1>Dont have an account? <Link to="/Register">Click here</Link></h1>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;