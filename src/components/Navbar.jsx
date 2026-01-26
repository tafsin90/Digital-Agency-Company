import React from 'react'
import '../styles/navbar.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <nav>
            <div className='nav-left'>
                <div className='nav-img'>
                    <img src='/home/nav-Logo.png' />
                </div>
                <p>SquareUp</p>
            </div>

            <div className='nav-middle'>
                <Link to="/" className={isActive('/') ? 'active' : ''}>
                    Home
                </Link>
                <Link to="/services" className={isActive('/services') ? 'active' : ''}>
                    Services
                </Link>
                <Link to="/work" className={isActive('/work') ? 'active' : ''}>
                    Work
                </Link>
                <Link to="/process" className={isActive('/process') ? 'active' : ''}>
                    Process
                </Link>
                <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                    About
                </Link>
                <Link to="/careers" className={isActive('/careers') ? 'active' : ''}>
                    Careers
                </Link>
            </div>

            <div className='nav-right' >
                Contact Us
            </div>
        </nav>
    )
}

export default Navbar