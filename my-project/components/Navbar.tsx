// components/Navbar.tsx
import React from "react";
import "./navbar.css"; // Adjust the path if needed
import { url } from "inspector";

const Navbar: React.FC = () => {
  return (
    <nav>
      {/* Your navbar content goes here */}
      <ul className="navbar">
        <li className="logo">
          <a href="#">
            <img
              src="/Users/xyz/compiledProj/my-project/public/logo.png"
              alt="user"
              className="user-image"
            ></img>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Movies</a>
        </li>
        <li className="nav-item">
          <a href="#">TV Shows</a>
        </li>
        <li className="nav-item">
          <a href="#">AskAI</a>
        </li>
        <li className="nav-item">
          <a href="#">Upgrade</a>
        </li>
        <li className="nav-item right">
          <input type="text" placeholder="Search..." />
          <a href="#">
            <img
              src="/Users/xyz/compiledProj/my-project/public/logo.png"
              alt="user"
              className="user-image"
            ></img>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
