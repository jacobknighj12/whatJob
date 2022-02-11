import { render, fireEvent, screen } from "@testing-library/react";

import React from "react";

import { ContactUs } from "./components/ContactUs";

test("testing name input field", () => {
  render(<ContactUs />);
  const name = screen.getByText("Name");
  // screen.debug();
  expect(name).toBeInTheDocument();
  const inputName = screen.getByLabelText("Name");
  fireEvent.change(inputName, { target: { value: "Luke" } });
  // screen.debug(inputName);
  expect(inputName.value).toBe("Luke");
});

test("testing email input", () => {
  render(<ContactUs />);
  const email = screen.getByText("Email");
  expect(email).toBeInTheDocument();
  const inputEmail = screen.getByLabelText("Email");
  fireEvent.change(inputEmail, { target: { value: "email" } });
  expect(inputEmail.value).toBe("email");
  // screen.debug(inputEmail);
});

test("testing message input field", () => {
  render(<ContactUs />);
  const message = screen.getByText("Message");
  expect(message).toBeInTheDocument();
  const inputMessage = screen.getByLabelText("Message");
  fireEvent.change(inputMessage, { target: { value: "message" } });
  expect(inputMessage.value).toBe("message");
});
