import React from 'react'
import logo from '../../../public/dukaan-logo.png'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
    return (
        <footer id='footer'>
            <div className='container footer-container'>
                <div className="site-details">
                    <h5>
                        <img src={logo} className='logo' alt="logo" />
                        Dukaan
                    </h5>
                    <p>
                        One online shop for all you daily groceries.
                    </p>
                </div>

                <div className="quick-links">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="social-link">
                    <h5>Social Links</h5>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <p>Copyright ©2023 Krunal Jumde | All Right Reserved </p>
        </footer>

    )
}

export default Footer