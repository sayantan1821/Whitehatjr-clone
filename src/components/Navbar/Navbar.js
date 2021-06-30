import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className= 'navbar'>
            <div className="navbar-logo">
                <img src='https://www.whitehatjr.com/desktop-home/whitehat-logo.svg' alt='logo' />
            </div>
            <div className="menu">
                <li className='menu-li'>
                    <a href="/#">Curriculam + Pricing</a>
                    
                    <ul>
                    <li className='child-link'><a href="/#">Child Link</a></li>
                    <li className='child-link'><a href="/#">Child Link</a></li>
                    <li className='child-link'><a href="/#">Child Link</a></li>
                    <li className='child-link'><a href="/#">Child Link</a></li>
                    </ul>
                </li>
            </div>
            <div className="menu">
                <li className='menu-li'>
                    <a href="/#">Courses: <span><b>Coding</b></span></a>
                    
                    <ul>
                    <li className='child-link'><a href="/#">Child Link</a></li>
                    <li className='child-link'><a href="/#">Child Link</a></li>
                    <li className='child-link'><a href="/#">Child Link</a></li>
                    </ul>
                </li>
            </div>
            <div className='navbar-buttons'>
                <button class="btn-outlined"><b>Join Class Now</b></button>
                <button class="btn success"><b>Book a FREE trial</b></button>
            </div>
        </div>
    )
}

export default Navbar
