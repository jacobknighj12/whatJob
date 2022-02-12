import React, { useState } from 'react'
var axios = require('axios');

function handleSubmit(event) {
    event.preventDefault();
    var FormData = require('form-data');
    var data = new FormData();
    data.append('user[email]', `${event.target.email.value}`);
    data.append('user[password]', `${event.target.password.value}`);

    var config = {
        method: 'post',
        url: 'http://localhost:3000/api/users/sign_in',

        headers: {
        },
        data: data,

    };

    axios(config)
        .then(function (response) {
            console.log('data');
            console.log(JSON.stringify(response.data));
            console.log('Headers');
            console.log(JSON.stringify(response.headers.authorization));
            localStorage.setItem('user', response.headers.authorization)
        })
        .catch(function (error) {
            console.log(error);
        });
}
export function LoginPage() {

    const [user, setUser] = useState()

    return (

        <>
              <heading className="heading">Login</heading>
              <div className='standard-form'>
            <form onSubmit={handleSubmit}>
                      
                <label>Email</label>
                <input type='email' name='email'></input>
                <label>Password</label>
                <input type='current-password' name='password'></input>
                <button><a href='/'>Login</a></button>
                </form>
            <div id="signup-button-box"><a href='/Signup' id="signup-button">
                <button >Signup</button></a></div></div>
        </>

    )
}