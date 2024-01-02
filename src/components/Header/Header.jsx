import React from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../public/icons8-react-80.png'

import loginLogo from '../../../public/login-icon.png'

import dukaanLogo from '../../../public/dukaan-logo.png'
import cartIcon from '../../../public/cart-icon.png'
import favIcon from '../../../public/favorite-icon.png'
import SearchBar from '../SearchBar/SearchBar'

function Header() {

    let navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container">
                <Link to="/" className="nav-link">
                    <img src={dukaanLogo} className='logo' alt="logo" />
                </Link>
                <Link to="/" className="nav-link">
                    <h4>Dukaan</h4>
                </Link>
                <Link to="/products" className='nav-link mx-3'>
                    <h6>Shop</h6>
                </Link>
                <div className="navbar-collapse" >
                    <div className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <SearchBar />
                    </div>
                    {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
                    </ul> */}
                    <div>
                        <img src={favIcon} className='side-icon' alt="cart_icon" />
                        <img src={cartIcon} className='side-icon' alt="cart_icon" />
                        <Link to="/login">
                            <img src={loginLogo} className='side-icon' alt="login_logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header