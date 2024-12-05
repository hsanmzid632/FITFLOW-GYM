import React, { useState, useEffect } from 'react';
import './Header.css'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const handleLoginStatusChange = () => {
      const status = sessionStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(status);
    };
    window.addEventListener('storage', handleLoginStatusChange);
    window.addEventListener('loginSuccess', handleLoginStatusChange);

    return () => {
      window.removeEventListener('storage', handleLoginStatusChange);
      window.removeEventListener('loginSuccess', handleLoginStatusChange);
    };
  }, []);

  const handleLogout = () => {
    console.log('Déconnexion...');
    sessionStorage.removeItem('isLoggedIn'); // Remove login state from session storage
    window.dispatchEvent(new Event('logout')); // Trigger logout event
    navigate('/');
  };

  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="Header-menu">
        <a href="/">
          <button>Home</button>
        </a>
        <a href="/#Programms">
          <button>Programms</button>
        </a>
        <a href="/#Plans">
          <button>Join Now</button>
        </a>
        <a href="/#Reasons">
          <button>About us</button>
        </a>
        <div>
          {isLoggedIn ? (
            <Link to="/account1">
              <button>Account</button>
            </Link>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
