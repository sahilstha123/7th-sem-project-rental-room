import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="section">
          <h2>About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dicta animi excepturi earum quam laborum vitae dolorum, et eius
            modi. Dolor quibusdam blanditiis excepturi cumque?
          </p>
        </div>
        <div class="section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
        <div class="section">
          <h2>Follow us</h2>
          <ul class="social-links">
            <li>
              {/* <FaFacebookF /> */}
              <a href="/">Facebook</a>
            </li>
            <li>
              {/* <FaTwitter /> */}
              <a href="/">Twitter</a>
            </li>
            <li>
              {/* <FaInstagram /> */}
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>2024 Code with Us. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
