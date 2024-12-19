import React, { useEffect, useState } from "react";
import React, { useContext, useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import NWbutton from "../button/NWbutton";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

export const Navbar = () => {
  const [open, setOpen] = useState(false); // Menu toggle state
  const nav = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log("current auth", currentUser);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.fetch);
  const handleLogin = () => {
    nav("/login"); // Redirect to login page when clicked
  };

  // useEffect(() => {
  //   console.log(window.innerWidth);
  // }, [window]);

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
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
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser?.user.avatar || "/noavatar.jpg"}
              alt="Avatar"
              className="avatar"
            />
            <span>{currentUser?.user.username}</span> {/* Display username */}
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : ( */}
        <NWbutton
          onClick={handleLogin}
          className="signup"
          style={{
            cursor: "pointer",
          }}
        >
          Login
        </NWbutton>
        <Link to="/register">
          <NWbutton
            className="signup"
            style={{
              cursor: "pointer",
            }}
          >
            Signup
          </NWbutton>
        </Link>
        {/* )} */}
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
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};
