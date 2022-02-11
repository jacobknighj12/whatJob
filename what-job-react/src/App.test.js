import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import { ContactUs } from "./components/ContactUs";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { CategoriesPage } from "./components/CategoriesPage";
import { NewPostPage } from "./components/NewPostPage";
import { AccountPage } from "./components/AccountPage";
import { JobPosts } from "./components/PostPage";

test("renders navbar button home", () => {
  render(<App />);
  const buttonElement = screen.getByText(/whatJob?/i);
  expect(buttonElement).toBeInTheDocument();
});
