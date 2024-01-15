import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import './login.css'

import loginImg from '../../../../assets/Fingerprint-pana.png'
import AuthContext from '../../../../context/AuthContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login, loggedInUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password)
        console.log(username + ' | ' + password);
    }

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    return (
        <div className="login-container">
            {loggedInUser && <Navigate to="/shop" replace={true} />}
            <div className='login-form'>
                <div className="login-left">
                    <img src={loginImg} className='login-left-img' alt="login_image" />
                </div>
                <div className="login-right">
                    <h3>Login</h3>
                    <label htmlFor="uName">Username</label>
                    <br />
                    <input
                        id='uName'
                        type='text'
                        name='username'
                        value={username}
                        onChange={(event) => handleChange(event)}
                    />
                    <br />
                    <label htmlFor="uPass">Password</label>
                    <br />
                    <input
                        id='uPass'
                        type='password'
                        name='password'
                        value={password}
                        onChange={(event) => handleChange(event)}
                    />
                    <br />
                    <br />
                    <button type='button' className='btn btn-sm btn-primary'
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <p> New to app? <Link to="/signup">Sign Up</Link> </p>
                </div>

            </div>
        </div>
    )
}

export default Login