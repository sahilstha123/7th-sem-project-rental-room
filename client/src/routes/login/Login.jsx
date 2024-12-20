import { useContext, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"; // Added triangle icon

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // In Login component
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await apiRequest.post("/auth/login", { username, password });

      updateUser(res.data); // Update context with user data after successful login

      navigate("/"); // Navigate to the home page or profile page
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility} // Toggle password visibility
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
