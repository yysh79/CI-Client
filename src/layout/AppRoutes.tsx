import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/home/Home'
import UsersList from '../components/UserList'
import Otp from '../components/Otp'
import Login from '../components/LogIn';
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='login' element={<Login/>} />
                 <Route path='/usersList' element={<UsersList />} />
                 <Route path='/otp' element={<Otp/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
