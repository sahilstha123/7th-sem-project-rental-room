import React, { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Login = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <div style={{ position: "relative" }}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
          <button>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};
