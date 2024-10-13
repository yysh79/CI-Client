import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/home/Home'
import UsersList from '../components/UserList'
import LogIn from '../components/LogIn';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='/logIn' element={<LogIn />} />
                    <Route path='/usersList' element={<UsersList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
