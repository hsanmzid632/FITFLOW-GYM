import React from "react";
import {
  FaDumbbell,
  FaHome,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap'; // Import Alert component from React Bootstrap
import './SideNav.css'

const SideNav = () => {
 

  const handleLogout = () => {
    const shouldLogout = window.confirm("Logged out! Don't forget to track your progress next time.");
    if (shouldLogout) {
      sessionStorage.removeItem('isLoggedIn');
      window.location.href = '/';
    }
  };

  return (
    <div className="SideNav">
      <div className="Nav">
        <ul>
          <Link to="/" className="navItem">
            <li>
              <FaHome />
              <br />
              Home
            </li>
          </Link>
          <Link to="/account1" className="navItem">
            <li>
              <FaUserAlt />
              <br />
              Profile
            </li>
          </Link>
          <Link to="/programm" className="navItem">
            <li>
              <FaDumbbell />
              <br />
              Program
            </li>
          </Link>
          <Link to="/orders" className="navItem">
            <li>
              <GiMeal />
              <br />
              Meals
            </li>
          </Link>
          <Link to="/login">
          <li className="navItem" onClick={handleLogout}>
            <FaSignOutAlt />
            <br />
            Log out
          </li>
       
          </Link> </ul>
        {/* Optionally display a success alert after logout (requires state management) */}
       
      </div>
    </div>
  );
};

export default SideNav;
