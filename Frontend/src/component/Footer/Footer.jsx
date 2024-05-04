import React from 'react'
import './Footer.css'
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from '../../assets/logo.png';
const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="blur blur-f1"></div>
            <div className="blur blur-f"></div>
            <div className="footer">
                <div className="social-links">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt=""/>
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="Logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
