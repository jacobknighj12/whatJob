import axios from "axios";
import React, { useState } from "react";
import WhatJobRailsAPI from "../config/api";

export async function getContactMessages() {
  const response = await WhatJobRailsAPI.get("/api/contactmessage");
  console.log(response);
}

export function ContactUs(props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = values;

    var config = {
      method: "post",
      url: "http://localhost:3000/api/contactmessage",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleNameChange = (event) => {
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleMessageChange = (event) => {
    setValues((values) => ({
      ...values,
      message: event.target.value,
    }));
  };

  return (
    <>
      <form className="login-signup" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name" name="Name">
            Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={values.name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="Email" name="Email">
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={values.email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="Message" name="Message">
            Message
          </label>
          <textarea
            type="message"
            id="Message"
            name="Message"
            value={values.message}
            onChange={handleMessageChange}
          />
        </div>
        <div>
          <button> Submit </button>
        </div>
      </form>
    </>
  );
}
