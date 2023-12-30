import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import './home.css'
function Home() {

    // const user = useContext(AuthContext);

    return (
        <div className='landing-page'>
            <h2>Welcome, User</h2>
        </div>
    )
}

export default Home