import React from 'react'
var axios = require('axios');

function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value)
    var FormData = require('form-data');
    var data = new FormData();
    data.append('email', `${event.target.email.value}`);
    data.append('password', `${event.target.password.value}`);
    data.append('password_confirmation', `${event.target.password.value}`);
    data.append('first_name', `${event.target.first_name.value}`);
    data.append('last_name', `${event.target.last_name.value}`);

    var config = {
        method: 'post',
        url: 'http://localhost:3000/api/users',
        headers: {
            // ...data.getHeaders()
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
export function SignupPage() {
    return (
         <><heading>Signup</heading>
                   <div className='standard-form'>
            <form className='standard-form' onSubmit={handleSubmit}>

                <label>Email</label>
                <input type='text' name='email'></input>
                <label>first_name</label>
                <input type='text' name='first_name'></input>
                <label>last_name</label>
                <input type='text' name='last_name'></input>
                <label>Password</label>
                <input type='password' name='password'></input>
                <button><a href='/Login'>Signup</a></button>

                </form></div>

        </>

    )
}