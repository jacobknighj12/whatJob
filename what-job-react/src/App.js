import React, { useContext, useState } from 'react'
import "./App.css";
import { ContactUs } from "./components/ContactUs";
import { HomePage } from './components/HomePage';
import { NavBar } from './components/NavBar';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { CategoriesPage } from './components/CategoriesPage';
import { NewPostPage } from './components/NewPostPage';
import { AccountPage } from "./components/AccountPage";

function App() {
  // const [darkMode, setDarkMode] = useContext(false)
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <HomePage />
      <ContactUs />
      <LoginPage />
      <SignupPage />
      <CategoriesPage />
      <NewPostPage />
      <ContactUs />
      <AccountPage />
    </div>
  );
}

export default App;
