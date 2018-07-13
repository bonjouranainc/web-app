import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton';
import logo from '../../images/svg/ba-logo-w.svg';

import '../../styles/components/NavBar.css';

const NavBar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="bonjour ana" />
        </Link>
      </div>
      <div className="navbar__navigation-items">
        <ul>
          <li>
            <a href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar">
              Servicios
            </a>
          </li>
          <li>
            <Link to="/about">Nosotros</Link>
          </li>
          <li>
            <Link to="/how">&iquest;Cómo funciona?</Link>
          </li>
        </ul>
      </div>
      <div className="navbar__spacer" />
      <div className="navbar__navigation-items">
        <ul>
          <li>
            <a href="https://bonjour-ana.myshopify.com/account/login">
              Sign Up
            </a>
          </li>
          <li>
            <a href="https://bonjour-ana.myshopify.com/account/login">Log In</a>
          </li>
        </ul>
      </div>
      <div className="navbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default NavBar;
