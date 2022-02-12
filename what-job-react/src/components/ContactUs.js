import axios from "axios";
import React, { useState } from "react";
import WhatJobRailsAPI from "../config/api";

export async function getContactMessages() {
  const response = await WhatJobRailsAPI.get("/api/contactmessage");
  console.log(response);
}

// export async function sendMessage() {
//   const response = await WhatJobRailsAPI.post("/api/contactmessage", data);
//   console.log(response.data);
// }

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
      <heading>Contact Us</heading>
      <div className="standard-form">
      <form onSubmit={handleSubmit}>
        
          <label name="name">Name</label>
          <input name="name" value={values.name} onChange={handleNameChange} />
          <label name="email">Email</label>
          <input
            name="email"
            value={values.email}
            onChange={handleEmailChange}
          />
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleMessageChange}
          />
          <button> Submit </button>
        
      </form >
      </div>
    </>
  );
}
