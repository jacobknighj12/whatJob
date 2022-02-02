import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import { ContactUs } from "./components/ContactUs";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { CategoriesPage } from "./components/CategoriesPage";
import { NewPostPage } from "./components/NewPostPage";
import { AccountPage } from "./components/AccountPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobPosts } from "./components/PostPage";
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./components/HomePage')
jest.mock('./components/NavBar')
jest.mock('./components/ContactUs')
jest.mock('./components/LoginPage')
jest.mock('./components/SignupPage')
jest.mock('./components/CategoriesPage')
jest.mock('./components/AccountPage')
jest.mock('./components/NewPostPage')
jest.mock('./components/PostPage')
describe('Tests for App Router', () => {
  test("Should render page header and HomePage on default route", () => {
    // Arrange
    NavBar.mockImplementation(() => <div>NavbarMock</div>);
    HomePage.mockImplementation(() => <div>HomePageMock</div>);
    render(

      <App />

    );

    // Assert
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  })
}) +


  test('renders navbar button home', () => {
    render(<App />);
    const buttonElement = screen.getByText(/whatJob?/i);
    expect(buttonElement).toBeInTheDocument();
  });
