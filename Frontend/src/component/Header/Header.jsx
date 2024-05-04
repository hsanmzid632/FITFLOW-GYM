import React, { useState, useEffect } from 'react';
import './Header.css'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Détecte les changements de l'état de connexion
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);

    // Supprime l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    // Ajoutez la logique de déconnexion
    console.log('Déconnexion...');
    localStorage.setItem('isLoggedIn', 'false'); // Simule une déconnexion réussie
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
          
        <Link to="/account1">
                <button>Account</button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
