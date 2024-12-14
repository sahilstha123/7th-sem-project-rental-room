import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./login.scss";
import apiRequest from "../../lib/apiRequest";

export const Login = () => {
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
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      console.log(res);
      // navigate("/"); // Redirect on success (uncomment when ready)
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleOnSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" required />
          <div style={{ position: "relative" }}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              style={{
                padding: "20px",
                border: "1px solid gray",
                borderRadius: "5px",
                width: "100%",
                paddingRight: "40px", // Space for the icon
              }}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#aaa", // Color same as placeholder
              }}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  );
};
