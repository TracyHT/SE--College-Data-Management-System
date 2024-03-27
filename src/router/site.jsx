
import { Route, Routes } from 'react-router-dom';
import Login from './../pages/auth/login';
export default function SiteRoute(){
    return <Routes>
        <Route path="/login"  element={<Login/>} name="login"/>
  </Routes>
}