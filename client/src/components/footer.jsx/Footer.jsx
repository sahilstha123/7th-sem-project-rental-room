import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
        <div className="account">
          <h2>Account</h2>
          <ul>
            <li>
              <a href="/">Update Profile</a>
            </li>
            <li>
              <a href="/">List Property</a>
            </li>
          </ul>
        </div>
        <div class="section1">
          <div className="logo">
            <img src={logo} alt="logo.png" />
          </div>
          <div>
            <ol class="social-links">
              <li>
                {/* <Number /> */}
                <a href="/" className="phone">
                  <img src="/phone.png" alt="" />
                  +977 9807654398
                </a>
              </li>
              <p>Contact Us</p>
            </ol>
            <div className="logos">
              <div>
                <a href="/">
                  <img src="/facebook.png" alt="" />
                </a>
              </div>
              <div>
                <a href="/">
                  <img src="/insta.png" alt="" />
                </a>
              </div>
              <div>
                <a href="/">
                  <img src="/twitter.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy;All Rights reserved to SmartStay</p>
      </div>
    </footer>
  );
};

export default Footer;
