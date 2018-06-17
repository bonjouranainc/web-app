import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../../../images/svg/ba-logo-w.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const NavBarDesktop = () => (
  <Menu secondary className="link__desktop">
    <Menu.Item>
      <Link to="/">
        <Image src={logo} size="mini" />
      </Link>
    </Menu.Item>
    <Menu.Item>
      <a
        className="link-text"
        href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar"
      >
        Servicios
      </a>
    </Menu.Item>
    <Menu.Item>
      <Link className="link-text" to="/about">
        Nosotros
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="link-text" to="/how">
        &iquest;Cómo funciona?
      </Link>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>
        <a
          className="link-text"
          href="https://bonjour-ana.myshopify.com/account/login"
        >
          Log In
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          className="link-text"
          href="https://bonjour-ana.myshopify.com/account/login"
        >
          Sign up
        </a>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBarDesktop;
