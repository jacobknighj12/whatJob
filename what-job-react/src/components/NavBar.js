import React from "react";
import { ReactComponent as Logo } from "./whatjob_logo.svg";
export function NavBar() {
  return (
    <nav className="nav" role="navigation">
      {/* Background image          */}

      {/* <img src='' /> */}
      <div className="nav-logo">
        <Logo />
      </div>
      <div className="nav-buttons">
        <a data-testid="link" href="/">
          <button>Home</button>
        </a>
        <a data-testid="link" href="/Categories">
          <button>Categories</button>
        </a>
        <a data-testid="link-contact" href="/ContactUs">
          <button>Contact us</button>
        </a>
        <a data-testid="link" href="/Account">
          <button>My Account</button>
        </a>
        <a data-testid="link" href="/Login">
          <button>Login</button>
        </a>
        <a data-testid="link" href="/Signup">
          <button>Signup</button>
        </a>
      </div>
    </nav>
  );
}
