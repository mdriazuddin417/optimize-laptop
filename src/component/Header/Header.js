import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <h3>Logo</h3>
      <div>
        <a href="/home">Home</a>
        <a href="/cart">Cart</a>
        <a href="/about">About</a>
        <a href="/login">LogIn</a>
      </div>
    </nav>
  );
};

export default Header;
