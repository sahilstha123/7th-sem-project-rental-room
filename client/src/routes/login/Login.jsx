import React, { useState } from "react";
import "./Login.scss";
import NWbutton from "../../components/button/NWbutton";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import Logo from "../../assets/logo.png";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="form-box">
        <img src={Logo} alt="Logo" className="signup-logo" />
        <form onSubmit={handleOnSubmit}>
          <div className="input-group">
            <div className="input-field">
              <input name="username" type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <i
                onClick={togglePasswordVisibility}
                className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              ></i>
            </div>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="btn-field">
            <button type="submit" className="button" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <p>
            Forgot password? <a href="#">Click Here</a>
          </p>
          <span>
            Don't have an account? <a href="#">Sign Up</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
