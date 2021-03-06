import React from 'react';
import { Link } from 'react-router-dom';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar">
            Servicio
          </a>
        </li>
        <li>
          <Link to="/about">Nosotros</Link>
        </li>
        <li>
          <Link to="/how">&iquest;Cómo funciona?</Link>
        </li>
        <li>
          <a href="https://bonjour-ana.myshopify.com/account/login">Log In</a>
        </li>
        <li>
          <a href="https://bonjour-ana.myshopify.com/account/login">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
