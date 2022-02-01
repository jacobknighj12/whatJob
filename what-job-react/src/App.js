
import './App.css';
import { HomePage } from './components/HomePage';
import { NavBar } from './components/NavBar';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { CategoriesPage } from './components/CategoriesPage';
import { NewPostPage } from './components/NewPostPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <HomePage />

      <LoginPage />
      <SignupPage />
      <CategoriesPage />
      <NewPostPage />

      <ContactUs />

    </div>
  );
}

export default App;
