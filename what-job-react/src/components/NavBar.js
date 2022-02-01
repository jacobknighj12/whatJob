import React from 'react'

export function NavBar() {
    return (
        <div>
            <button>Home</button>
            {/* if user isLoggedIn == true */}
            <button>Login/Signup</button>
            {/* else  */}
            <button>My Account</button>
            <button>Categories</button>
            <button>Contact us</button>
        </div>
    )
}