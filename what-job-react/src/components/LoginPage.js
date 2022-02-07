import React from 'react'
var axios = require('axios');

function handleSubmit(event) {
    event.preventDefault();
    var FormData = require('form-data');
    var data = new FormData();
    data.append('user[email]', 'alex2@test.com');
    data.append('user[password]', 'password1');

    var config = {
        method: 'post',
        url: 'http://localhost:3000/users/sign_in',
        headers: {
            // ...data.getHeaders() this breaks the app
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
export function LoginPage() {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Password</label>
                <input></input>
                <button >Login</button>
            </form>
            <a href='/Signup'>
                <button>Signup</button></a>
        </div>
    )
}