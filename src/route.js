import {Routes,Route} from 'react-router-dom';
import App from './App';
import AppUser from './AppUser'
import LoginPage from './Login';
import Register from './Register';
import Edit from './input'

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path='/App' element={<App/>}/>
            <Route path='/AppUser' element={<AppUser/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Edit' element={<Edit/>}/>
        </Routes>
     );
}
 
export default Router;