import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/svg/ba-logo-w.svg';

const Header = () => (
  <div className="menu">
    {/* <div className="logo">
      <img src={logo} alt="Bonjour Ana Logo" />
    </div> */}
    <div className="menu-left">
      <ul>
        <li>
          <Link to="services">Servicios</Link>
        </li>
        <li>
          <Link to="about">Nosotros</Link>
        </li>
        <li>
          <Link to="works">Como funciona?</Link>
        </li>
      </ul>
      <div className="menu-right">
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="SignUp">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
