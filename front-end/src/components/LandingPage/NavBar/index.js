import React from 'react';
import { Menu, Image, Sidebar, Responsive } from 'semantic-ui-react';
import logo from '../../../images/svg/ba-logo-w.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const NavBar = () => (
  <Menu secondary className="header">
    <Menu.Item>
      <Image src={logo} size="tiny" href="/" />
    </Menu.Item>
    <Menu.Item>
      <a href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar">
        Servicios
      </a>
    </Menu.Item>
    <Menu.Item>
      <Link to="About">Nosotros</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="How">&iquest;Cómo funciona?</Link>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>
        <a href="https://bonjour-ana.myshopify.com/account/login">Login</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://bonjour-ana.myshopify.com/account/login">Sign up</a>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
