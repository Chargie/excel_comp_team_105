import React from "react";
import Logo from "../../Reuseable components/Logo/Logo";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <Logo />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <button>Get Started</button>
      </ul>
    </div>
  );
};

export default Navbar;
