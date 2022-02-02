import React from 'react'
export function NavBar() {
    return (
        <div>
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
    )
}