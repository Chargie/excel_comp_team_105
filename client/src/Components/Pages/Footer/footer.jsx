import React from "react";
// import Logo from "../../Reuseable components/Logo/Logo"
import "./footer.css";
import Logo from "./Logo.png";

console.log(Logo);

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="image">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="grid-container" >
          <div class="row1">
            <ul>
              <h4>Product</h4>
              <li>
                <a href="/close">Why XelComp?</a>
              </li>
              <li>
                <a href="/close">Support</a>
              </li>
            </ul>
          </div>
          <div class="row2">
            <ul>
              <h4>Company</h4>
              <li>
                <a href="/close">About Us</a>
              </li>
              <li>
                <a href="/close">Team</a>
              </li>
              <li>
                <a href="/close">Contact</a>
              </li>
              <li>
                <a href="/close">Blog</a>
              </li>
              <li>
                <a href="/close">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div class="row3">
            <ul>
              <h4>Get Started</h4>
              <li>
                <a href="/close">Pricing</a>
              </li>
              <li>
                <a href="/close">Book a Demo</a>
              </li>
              <li>
                <a href="/close">Contact</a>
              </li>
            </ul>
          </div>

          <div class="row4">
            <ul>
              <h4>Follow Us</h4>
              <li>
                <a href="/close">Facebook</a>
              </li>
              <li>
                <a href="/close">LinkedIn</a>
              </li>
              <li>
                <a href="/close">Twitter</a>
              </li>
              <li>
                <a href="/close">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
