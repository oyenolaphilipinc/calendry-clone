import React from 'react';
import Logo from '../assets/calendly.svg'
import './Navbar.css'

function Navbar(){
return(
    <div className="container">
        {/* Navbar */}
        <div className='wrapper flex'>
            <a href='#'>
            <img src={Logo} height={200} width={200} className="img-hero" />
            </a>
            <ul className='nav-links'>
                <li className="link"><a href="#">Individuals</a></li>
                <li className="link"><a href="#">Team</a></li>
                <li className="link"><a href="#">Enterprise</a></li>
                <li className="link"><a href="#">Pricing</a></li>
                <li className="link"><a href="#">Resources</a></li>
            </ul>
            <a className="link-button" href='https://calendly.com/signup'>Get started</a>
            <div className='burger'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    </div>
)
}

export default Navbar;