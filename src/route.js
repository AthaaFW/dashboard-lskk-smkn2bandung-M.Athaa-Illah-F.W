import {Routes,Route} from 'react-router-dom';
import App from './App';
import LoginPage from './Login';
import Register from './Register';

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path='/App' element={<App/>}/>
            <Route path='/Register' element={<Register/>}/>
        </Routes>
     );
}
 
export default Router;