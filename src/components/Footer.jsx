import React from 'react'
import '../styles/footer.css'
import { Link, useLocation } from 'react-router-dom'


function Footer() {
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path
    }
    return (
        <footer>
            <section className='first-foot'>
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

                <div className='rightUp'>
                    <p>Stay Connected</p>
                    <div className='logo-container foot-img'>
                        <img src='/home/fb.png' />
                    </div>
                    <div className='logo-container foot-img'>
                        <img src='/home/twitter.png' />
                    </div>
                    <div className='logo-container foot-img'>
                        <img src='/home/linkedIn.png' />
                    </div>
                </div>
            </section>
            <section className='scnd-foot'>
                <div className='contact-details'>
                    <div className='em-phn-loc'>
                        <img src='/home/email.png' />
                        <label>hello@squareup.com</label>
                    </div>
                    <div className='em-phn-loc'>
                        <img src='/home/phone.png' />
                        <label>8769854769876</label>
                    </div>
                    <div className='em-phn-loc'>
                        <img src='/home/location.png' />
                        <label>winterfell westeros</label>
                    </div>
                </div>
                <div className='copyright'>
                    &copy; 2023 Squareup. All rights reserved.
                </div>
            </section>
        </footer>
    )
}

export default Footer