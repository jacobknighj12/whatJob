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
import { JobPosts } from "./components/JobPosts";
import { DeepDivePage } from "./components/DeepDivePage";
import { ReportAlert } from "./components/reportalert";
function App() {
  // const [darkMode, setDarkMode] = useContext(false)
  // const [category, setCategory] = useContext(false)
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Categories" element={<CategoriesPage />} />
          <Route path="/NewPost" element={<NewPostPage />} />
          <Route path="/Account" element={<AccountPage />} />
          <Route path="/JobPosts" element={<JobPosts />} />
          <Route path="/DeepDive" element={<DeepDivePage />} />
          <Route path="/reportalert" element={<ReportAlert />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
