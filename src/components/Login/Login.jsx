import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import './login.css'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login, logout } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password);
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
        <div className='login-form'>
            <h5>Login</h5>
            <label htmlFor="uName">Enter Username</label>
            <br />
            <input
                id='uName'
                type='text'
                name='username'
                value={username}
                onChange={(event) => handleChange(event)}
            />
            <br />
            <label htmlFor="uPass">Enter Password</label>
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
    )
}

export default Login