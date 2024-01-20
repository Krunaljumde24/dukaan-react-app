import React, { useContext } from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import loginLogo from '../../assets/login-icon.png'
import dukaanLogo from '../../assets/dukaan-logo.png'
import cartIcon from '../../assets/cart-icon.png'
import favIcon from '../../assets/favorite-icon.png'
import AuthContext from '../../context/AuthContext'
import { ProductContext } from '../../context/ProductContext'

function Header() {

    const { loggedInUser, logout } = useContext(AuthContext)
    const { getCartItemCount, searchText, updateSearchText } = useContext(ProductContext);

    let handleLogout = () => {
        logout();
    }

    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container">
                <Link to="/" className="nav-link">
                    <img src={dukaanLogo} className='logo' alt="logo" />
                </Link>
                <Link to="/" className="nav-link">
                    <h4>Dukaan</h4>
                </Link>
                <Link to="/shop" className="mx-3 nav-link">
                    <h6 className='navLinkShop'>Shop</h6>
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
                            {loggedInUser ? <Link to="/" className='nav-link' onClick={handleLogout}>Logout</Link> : <Link to="/login" className='nav-link'>Login</Link>}
                        </li>
                    </ul>
                    {loggedInUser
                        &&
                        <div className="search-input">
                            <input
                                type="text"
                                className='form-control'
                                placeholder='search'
                                value={searchText}
                                onChange={(event) => updateSearchText(event.target.value)}
                            />
                        </div>
                    }

                    <div>
                        <span className='side-icon position-relative'>
                            <img src={favIcon} alt="cart_icon" className='side-icon-img' />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {/* {0} */}
                            </span>
                        </span>
                        <span className='side-icon position-relative'>
                            <Link to="/cart">
                                <img src={cartIcon} alt="cart_icon" className='side-icon-img' />
                            </Link>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {getCartItemCount()}
                            </span>
                        </span>
                        <span className='side-icon'>
                            <Link to="/login">
                                <img src={loginLogo} alt="login_logo" className='side-icon-img' />
                            </Link>
                        </span>

                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header