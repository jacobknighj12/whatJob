import React from 'react'

export function SignupPage() {
    return (
        <><heading className="heading">Signup</heading><div className='login-signup'>
            <form>
            <div className='standard-form'>
                <label>Username</label>
                <input id='username' type="text"></input>
                <label>Email</label>
                <input id="email" type="text"></input>
                <label>Password</label>
                <input id="password" type="text"></input>

                <div className='button-group'><button>Signup</button>
                    {/* </form> */}
                    <button>Login</button></div></div>
            </form>
        </div></>
    )
}