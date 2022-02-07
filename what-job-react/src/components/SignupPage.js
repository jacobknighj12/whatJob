import React from 'react'

export function SignupPage() {
    return (
        <div>
            <form>
                <label>Username</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Password</label>
                <input></input>
                <button>Signup</button>
            </form>
            <a href='/Login'>
                <button>Login</button></a>
        </div>
    )
}