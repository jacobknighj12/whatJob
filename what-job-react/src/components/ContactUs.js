import React, { useState } from "react";
import App from "../App";

export function ContactUs(props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your message");
    event.target.reset();
    setValues("");
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
      <form onSubmit={handleSubmit}>
        <div>
          <label name="name">Name</label>
          <input name="name" value={values.name} onChange={handleNameChange} />
        </div>
        <div>
          <label name="email">Email</label>
          <input
            name="email"
            value={values.email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
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
