import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/home/Home'
import UsersList from '../components/UserList'
import Login from '../components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Otp from '../components/Otp'

function AppRoutes() {

    return (
        <GoogleOAuthProvider clientId='669333978181-sdfeenddrcdv4nqpa9i5vpjlu8ud77t4.apps.googleusercontent.com'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='/usersList' element={<UsersList />} />
                        <Route path='/otp' element={<Otp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>

    )

}

export default AppRoutes
