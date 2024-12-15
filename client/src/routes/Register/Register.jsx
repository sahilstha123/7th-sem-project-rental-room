<<<<<<< HEAD
import "./register.scss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

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
      return;
    }

    try {
      // Add `withCredentials: true` for cookie support
      const res = await apiRequest.post(
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
=======
import React from 'react'
import './register.scss';
import Logo from '../../assets/logo.png'
import NWbutton from '../../components/button/NWbutton';
>>>>>>> c54c326bf00dd34aec5a910ac106a87a7a3132eb

const Register = () => {
  return (
    <div className='register'>
   <div class="custom-form-container">
        {/* <!-- Logo and Title --> */}
        <img src={Logo} alt="Logo" class="signup-logo"/>

        {/* <!-- Sign Up Form --> */}
        <form>
            <div>
                <input type="text" className="form-control input-field" placeholder="Your Fullname" aria-label="Full Name" required/>
            </div>
            <div>
                <input type="email" className="form-control input-field" placeholder="Your Email Address" aria-label="Email Address" required/>
            </div>
            
            <div className="position-relative">
                <input type="password" id="password" className="form-control input-field" placeholder="Password" aria-label="Password" required/>
            </div>
            <div className="position-relative">
                <input type="password" id="confirm-password" className="form-control input-field" placeholder="Confirm Password" aria-label="Confirm Password" required/>
            </div>
            <NWbutton className="signup-btn">Sign Up</NWbutton>

            {/* <!-- Additional Options --> */}
            <div className="register">
                <span>Already a member?</span>
                <a href="../login/index.html" className="link-text">Login</a>
            </div>
         
        </form>
    </div>
    </div>
  )
}

export default Register