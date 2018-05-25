import React from 'react';
import logo from '../../../images/svg/ba-logo-w.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const NavBar = () => (
  <nav className="navbar is-dark">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src={logo} alt="Bonjour Ana Logo" className="logo" />
      </Link>
      <div className="navbar-burger">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="navbarLinks" className="navbar-menu">
      <div className="navbar-start">
        <a
          href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar"
          className="navbar-item"
        >
          Servicios
        </a>
        <Link to="About" className="navbar-item">
          Nosotros
        </Link>
        <Link to="How" className="navbar-item">
          &iquest;Como funciona?
        </Link>
      </div>

      <div className="navbar-end">
        <a
          href="https://bonjour-ana.myshopify.com/account/login"
          className="navbar-item"
        >
          Log In
        </a>

        <a
          href="https://bonjour-ana.myshopify.com/account/login"
          className="navbar-item"
        >
          Sign Up
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;

// <div className="header">
//   <div className="logo">
//     <Link to="/">
//       <img src={logo} alt="Bonjour Ana Logo" />
//     </Link>
//   </div>
//   <div className="header-left">
//     <a
//       className="s-txt"
//       href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar"
//     >
//       Servicios
//     </a>
//     <Link to="About" className="s-txt">
//       Nosotros
//     </Link>
//     <Link to="How" className="s-txt">
//       &iquest;Como funciona?
//     </Link>
//   </div>

//   <div className="header-right">
//     <a
//       className="s-txt"
//       href="https://bonjour-ana.myshopify.com/account/login"
//     >
//       Login
//     </a>
//     <a
//       className="s-txt"
//       href="https://bonjour-ana.myshopify.com/account/login"
//     >
//       Sign Up
//     </a>
//   </div>
// </div>
