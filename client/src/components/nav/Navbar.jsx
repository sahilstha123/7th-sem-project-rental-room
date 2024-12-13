import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          <a href="">Signin</a>
          <a href="" className="signup">
            Signup
          </a>
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
