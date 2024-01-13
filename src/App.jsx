import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'
import Login from './components/common/auth/Login/Login'
import Home from './components/Home/Home'

function App() {


    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App