import "./register.scss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import Logo from "../../assets/logo.png";
import NWbutton from "../../components/button/NWbutton";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
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
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register">
      <div className="custom-form-container">
        {/* Logo and Title */}
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

          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control input-field"
              placeholder="Password"
              aria-label="Password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="position-relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="form-control input-field"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="toggle-password"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}

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
