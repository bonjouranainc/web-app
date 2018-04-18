import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/svg/ba-logo-w.svg';

const Header = () => (
  <div className="menu">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Bonjour Ana Logo" />
      </Link>
    </div>
    <div className="menu-left" />
  </div>
);

export default Header;
