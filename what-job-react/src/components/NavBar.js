import React from 'react'
import { ReactComponent as Logo } from './whatjob_logo.svg';
export function NavBar() {
    return (
        <nav className='nav'>

            {/* Background image          */}
            
            {/* <img src='' /> */}
            <div className='nav-logo'>
            <Logo />
            </div>
            <div className='nav-buttons'>
            <a href='/'>
                <button>Home</button>
            </a>
            {/* if user isLoggedIn == true */}
            <a href='/Signup'>
                <button>Login/Signup</button></a>
            {/* else  */}
            <a href='/Account'>
                <button>My Account</button></a>
            <a href='/Categories'>
                <button>Categories</button></a>
            <a href='/ContactUs'>
                <button>Contact us</button></a>
            </div>
        </nav>
    )
}