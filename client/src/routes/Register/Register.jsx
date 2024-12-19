import "./register.scss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import Logo from "../../assets/logo.png";
import NWbutton from "../../components/button/NWbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"; // Added triangle icon

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset error

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Email validation regex (basic format validation)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email."); // Shortened error message
      setIsLoading(false);
      return;
    }

    // Password validation: at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must include uppercase, lowercase, number, and special character." // Shortened error message
      );
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match."); // Shortened error message
      setIsLoading(false);
      return;
    }

    try {
      // Add `withCredentials: true` for cookie support
      await apiRequest.post(
        "/auth/register",
        {
          username,
          email,
          password,
          confirmPassword,
        },
        { withCredentials: true }
      );

      // Redirect to login after successful registration
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="register">
      <div className="custom-form-container">
        <img src={Logo} alt="Logo" className="signup-logo" />

        {/* Sign Up Form */}
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              type="text"
              name="username"
              className="form-control input-field"
              placeholder="Your Fullname"
              aria-label="Full Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="form-control input-field"
              placeholder="Your Email Address"
              aria-label="Email Address"
              required
            />
          </div>

          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"} // Toggle password visibility
              name="password"
              className="form-control input-field"
              placeholder="Password"
              aria-label="Password"
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility} // Toggle password visibility
            />
          </div>

          <div className="password-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"} // Toggle confirm password visibility
              name="confirmPassword"
              className="form-control input-field"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              required
            />
            <FontAwesomeIcon
              icon={confirmPasswordVisible ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={toggleConfirmPasswordVisibility} // Toggle confirm password visibility
            />
          </div>

          {error && (
            <div className="error-message">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                size="lg"
                className="error-icon"
              />
              <span className="error-text">{error}</span>
            </div>
          )}

          <NWbutton type="submit" className="signup-btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign Up"}
          </NWbutton>

          {/* Additional Options */}
          <div className="register">
            <span>Already a member?</span>
            <Link to="/login" className="link-text">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
