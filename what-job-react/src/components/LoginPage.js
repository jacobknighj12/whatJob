import React, { useState } from 'react'
var axios = require('axios');

function handleSubmit(event, setUser) {
    event.preventDefault();
    var FormData = require('form-data');
    var data = new FormData();
    data.append('user[email]', `${event.target.email.value}`);
    data.append('user[password]', `${event.target.password.value}`);

    var config = {
        method: 'post',
        url: 'http://localhost:3000/api/users/sign_in',

        headers: {
            // ...data.getHeaders() this breaks the app
            ...data.headersSent
        },
        data: data,
        headers: data.headersSent
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            console.log(JSON.stringify(response.headers));


            // set the state of the user
            // setUser(response.data) doesn't really work in this context due to being a function in a component
            // store the user in localStorage

            // console.log(...data.headersSent('Authorization'))
            // localStorage.setItem('user', response.getHeader('Authorization'))

        })
        .catch(function (error) {
            console.log(error);
        });
}
export function LoginPage() {

    const [user, setUser] = useState()

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='text' name='email'></input>
                <label>Password</label>
                <input type='password' name='password'></input>
                <button >Login</button>
            </form>
            <a href='/Signup'>
                <button>Signup</button></a>
        </div>
    )
}