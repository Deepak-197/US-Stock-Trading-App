import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{color:"#26D7AB"}}>Stock Trading App</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
          id="navbarSupportedContent"  style={{ marginLeft:"400px"}}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchlist">Watchlist</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/holding">Holding</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Subcriptions</Link>
            </li>

            
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
