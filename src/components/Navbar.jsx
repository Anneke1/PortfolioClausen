import { useState } from "react";
import "../style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="navbar-logo" href="#">
        Portfolio Anneke Clausen
      </a>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menü-Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#education" onClick={() => setIsOpen(false)}>
            Education
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
