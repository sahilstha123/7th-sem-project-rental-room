import React from "react";
import { Navbar } from "../../components/nav/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
