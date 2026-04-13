import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./img/qumi-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="site-nav">
      <div className="container site-nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={Logo} alt="Qumi-Ori Resources" />
        </Link>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="nav-link" onClick={closeMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
export default Nav;
