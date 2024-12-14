import React, { useState } from "react";
import "./Login.scss";
import NWbutton from "../../components/button/NWbutton";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest"; // Ensure this import

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
      <div className="container">
        <div className="form-box">
          <h1 id="heading">Sign up</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input
                  name="username"
                  type="text"
                  placeholder="username"
                  id="usernamefield"
                />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                />
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                />
              </div>
              <p>
                Forgot password?<a href="#">Click Here</a>
              </p>
            </div>
            {error && <p className="error">{error}</p>}
            <div className="btn-field">
              <NWbutton disabled={isLoading}>Login</NWbutton>
              <NWbutton>Signup</NWbutton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
