import PropTypes from "prop-types";
import { useState } from "react";
import '../global.css';
import companyLogo from '../assets/CompanyLogo.png';
import './Navbar.css';
import { HiMiniChevronDown } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`navbar-container ${className}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img className="w- relative h-[35px]" alt="Company Logo" src={companyLogo} />
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <div className="navbar-link">Home</div>
          <div className="navbar-link">About</div>
          <div className="navbar-link">Pricing</div>
          <div className="navbar-customers">
            <div className="navbar-link">Customers</div>
            <HiMiniChevronDown />
          </div>
        </div>
        <div className={`navbar-actions ${isMenuOpen ? "active" : ""}`}>
          <div className="navbar-login">Login</div>
          <div className="navbar-register">Register</div>
        </div>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
