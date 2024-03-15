import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import { AuthProvider } from './Components/Auth';
import Login from './Components/Login';
import Admin from './Components/Admin';
import AdminAuth from './Components/AdminAuth';
import UserAuth from './Components/UserAuth';
import User from './Components/User';
import Navbar from './Components/Navbar';
import MarkAttendance from './Components/MarkAttendance';

const App=()=> {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes exact path='/' element={<Login/>}>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/admin' element={<AdminAuth><Admin/></AdminAuth>} />
        <Route exact path='/user' element={<UserAuth><User/></UserAuth>}/>
        <Route exact path='/markattendance' element={<AdminAuth><MarkAttendance/></AdminAuth>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
