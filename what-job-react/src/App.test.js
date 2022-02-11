import { render, fireEvent, screen } from "@testing-library/react";

import React from "react";

import { ContactUs } from "./components/ContactUs";

test("renders navbar button home", () => {
  render(<ContactUs />);
  const name = screen.getByText("Name");
  // screen.debug();
  // expect(name).toBeInTheDocument();
  const inputName = screen.getByLabelText("Name");
  fireEvent.change(inputName, { target: { value: "Luke" } });
  // screen.debug(inputName);
  expect(inputName.value).toBe("Bob");
});
