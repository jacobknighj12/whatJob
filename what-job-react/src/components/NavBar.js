import React from 'react'
export function NavBar() {
    let user = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <img src='whatJob-logo.JPG' style={{ width: 600 }}></img>
            <img src=''></img>
            <a href='/'>
                <button>Home</button>
            </a>
            {(() => {
                console.log(localStorage.getItem('user',))
                if (user == true) {
                    <a href='/Login'>
                        <button>Login</button></a>
                }
                else {
                    <a href='/Signup'>
                        <button>Signup</button></a>
                }
            })()}
            <a href='/Account'>
                <button>My Account</button></a>
            <a href='/Categories'>
                <button>Categories</button></a>
            <a href='/ContactUs'>
                <button>Contact us</button></a>
        </div>
    )
}