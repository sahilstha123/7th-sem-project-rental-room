import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import NWbutton from "../button/NWbutton";
import { Link, useNavigate } from "react-router-dom";
import Anil from "../../assets/anil.jpg";

export const Navbar = () => {
  const [open, setOpen] = useState(false); // Menu toggle state
  const nav = useNavigate();

  const handleLogin = () => {
    nav("/login"); // Redirect to login page when clicked
  };
  const user = true;

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          {" "}
          {/* Home link */}
          <img src={logo} alt="Smart Stay logo" />
          <span>Smart Stay</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src={Anil} alt="" />
            <span>Anil Rai</span>
            <Link to={"/profile"} className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <NWbutton onClick={handleLogin} className="signup">
              Login
            </NWbutton>
            <Link to="/register">
              <NWbutton className="signup">Signup</NWbutton>
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src={menu} alt="Menu" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};
