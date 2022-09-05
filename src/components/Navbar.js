import React from "react";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <AppBar position="static" CLASS="navbar-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="dashboard">Dashboard</Link>
      </nav>
    </AppBar>
  );
};

export default Navbar;
