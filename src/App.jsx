import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Toaster
                position='top-right'
            />
            <Footer />
        </>
    )
}

export default App