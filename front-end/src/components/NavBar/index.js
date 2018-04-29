import React from 'react';
import logo from '../../images/svg/ba-logo-w.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const NavBar = () => (
  <div className="header">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Bonjour Ana Logo" />
      </Link>
    </div>
    <div className="header-left s-txt">
      <a href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar">
        Servicios
      </a>
      <Link to="About">Nosotros</Link>
      <Link to="Terms">&iquest;Como funciona?</Link>
    </div>

    <div className="header-right s-txt">
      <a href="https://bonjour-ana.myshopify.com/account/login">Login</a>
      <a href="https://bonjour-ana.myshopify.com/account/login">Sign Up</a>
    </div>
  </div>
);

export default NavBar;
