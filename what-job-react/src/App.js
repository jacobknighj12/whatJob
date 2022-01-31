import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { NavBar } from './components/NavBar';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <HomePage />
      <LoginPage />
      <SignupPage />
    </div>
  );
}

export default App;
