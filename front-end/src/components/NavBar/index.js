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
    <div className="header-left">
      <a
        className="s-txt"
        href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar"
      >
        Servicios
      </a>
      <Link to="About" className="s-txt">
        Nosotros
      </Link>
      <Link to="Terms" className="s-txt">
        &iquest;Como funciona?
      </Link>
    </div>

    <div className="header-right">
      <a
        className="s-txt"
        href="https://bonjour-ana.myshopify.com/account/login"
      >
        Login
      </a>
      <a
        className="s-txt"
        href="https://bonjour-ana.myshopify.com/account/login"
      >
        Sign Up
      </a>
    </div>
  </div>
);

export default NavBar;
