import React from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../public/icons8-react-80.png'

import loginLogo from '../../../public/icons8-login-32.png'

function Header() {

    let navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container">
                <Link to="/" className="nav-link">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/" className="nav-link">
                    <h4>LoGo</h4>
                </Link>
                <div className="navbar-collapse" >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className='nav-link'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className='nav-link'>Login</Link>
                        </li>
                    </ul>
                    <img src={loginLogo} alt="login_logo" />
                </div>
            </div>
        </nav >
    )
}

export default Header