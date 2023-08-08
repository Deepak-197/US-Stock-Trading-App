import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, ChakraProvider } from '@chakra-ui/react'
import Profiepic from "../../assets/profile.jpeg"
import logo from "../../assets/logo_1.png"
import PopoverProfile from './PopoverProfile';
import Notification  from './Notification';
import { DarkModeTheme } from './DarkModeTheme';


const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light"  >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className='logo' src={logo} alt="logo" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
          id="navbarSupportedContent"  
        >
        
          <ul className="navbar-nav ml-auto">
            
                <li className="nav-item">
                  <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/order">Orders</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/holdings">Holdings</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/positions">Positions</Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link" to="/funds">Funds</Link>
                </li>
              </ul>
            <div style={{marginLeft:"100px"}} className='profile-noti'>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                        <Link className="nav-link" to=""><WbSunnyOutlinedIcon /> </Link>
                  </li>
                  <li className="nav-item">
                        <Link className="nav-link" to=""><HistoryIcon /></Link>
                  </li>
                  <li className="nav-item">
                        {/* <Link className="nav-link" to=""><NotificationsNoneOutlinedIcon /></Link> */}
                        <ChakraProvider>
                           <Notification  />  
                        </ChakraProvider>
                  </li>
                  <li className="nav-item">
                        
                        <ChakraProvider>
                           <PopoverProfile />  
                        </ChakraProvider>
                        
                  </li>
                </ul>
            </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
