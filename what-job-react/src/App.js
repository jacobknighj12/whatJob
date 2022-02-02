import React, { useContext, useState } from "react";
import "./App.css";
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

function App() {
  // const [darkMode, setDarkMode] = useContext(false)
  return (
    <div className="App">


      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Signup' element={<SignupPage />} />
          <Route path='/Categories' element={<CategoriesPage />} />
          <Route path='/NewPost' element={<NewPostPage />} />
          <Route path='/Account' element={<AccountPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
