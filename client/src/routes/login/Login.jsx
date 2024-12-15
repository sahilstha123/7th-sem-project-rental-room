import React, { useState } from "react";
import "./Login.scss";
import NWbutton from "../../components/button/NWbutton";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest"; // Ensure this import
import Logo from "../../assets/logo.png";

const Login = () => {
  // States
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Define showPassword state
  const navigate = useNavigate();

  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const res = await apiRequest.post("/auth/login", { username, password });
      console.log(res);
      navigate("/"); // Redirect on success (uncomment when ready)
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div class="container">
        <div class="form-box">
          {/* Logo and Title */}
          <img src={Logo} alt="Logo" class="signup-logo" />

          <form onsubmit="handleOnSubmit(event)">
            <div class="input-group">
              <div class="input-field">
                <input
                  name="username"
                  type="text"
                  placeholder="username"
                  id="usernamefield"
                />
              </div>

              <div class="input-field">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  id="passwordfield"
                />
              </div>

              <p>
                Forgot password?<a href="#">Click Here</a>
              </p>
            </div>
            <p class="error" id="error-message"></p>
            <div class="btn-field">
              <button type="submit" class="button">
                Login
              </button>
            </div>

            <span>
              Don't have an account? <a href="#">Sign Up</a>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
