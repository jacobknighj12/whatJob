import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { CategoriesPage } from "./components/CategoriesPage";
import { NewPostPage } from "./components/NewPostPage";
import { ContactUs } from "./components/ContactUs";
import { JobPosts } from "./components/PostPage";

function App() {
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
      <LoginPage />
      <SignupPage />
      <CategoriesPage />
      <NewPostPage />
      <ContactUs />
      <JobPosts />
    </div>
  );
}

export default App;
