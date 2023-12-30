import React, { useEffect, useState } from 'react'
import AuthContextProvider from './context/AuthContextProvider'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

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