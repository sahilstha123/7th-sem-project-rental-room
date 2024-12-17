import React, { useContext, useState } from "react";
import "./Login.scss";
import NWbutton from "../../components/button/NWbutton";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);

      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <img src={Logo} alt="Logo" className="signup-logo" />
        <form onSubmit={handleOnSubmit}>
          <div className="input-group">
            <div className="input-field">
              <input
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="error">{error}</p>}
          <p>
            Forgot password? <a href="#">Click Here</a>
          </p>
          <div className="btn-field">
            <button type="submit" className="button" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>

          <span>
            Don't have an account? <a href="#">Sign Up</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
