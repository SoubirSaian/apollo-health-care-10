import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Apollo-Hospita-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-nav">
            <div>
                <img className="" src={logo} alt="" />
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/register">Apointment</Link></li>
            </ul>
        </div>
    );
};

export default Header;