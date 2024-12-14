import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import NWbutton from "../button/NWbutton";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const handleLogin = () => {
    nav("/login")
  }
  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src={logo} alt="Smart Stay logo" />
            <span>Smart Stay</span>
          </a>
          <a href="/">Home</a>

          <a href="">About</a>
          <a href="">Agents</a>
          <a href="">Contact</a>
        </div>
        <div className="right">
          <NWbutton onClick={handleLogin} className="signup" >Login</NWbutton>
          <Link to={"/register"}>
            <NWbutton className="signup">Signup</NWbutton>
          </Link>
          <div className="menuIcon">
            <img src={menu} alt="" onClick={() => setOpen((prev) => !prev)} />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>

            <a href="">About</a>
            <a href="">Agents</a>
            <a href="">Contact</a>
            <a href="">Sign in </a>
            <a href="">Sign Up</a>
          </div>
        </div>
      </nav>
    </>
  );
};
