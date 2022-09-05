import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes,
  Route,} from 'react-router-dom';
import Login from './network/pages/login-register/login';
import Register from './network/pages/login-register/register';
import Users from './network/pages/user';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route index element ={<Login/>} / >
    <Route path='register' element={<Register />} />
    <Route path='users' element={<Users/>}/>
 </Routes>
 
 </BrowserRouter>  
 

  );
}

export default App;
