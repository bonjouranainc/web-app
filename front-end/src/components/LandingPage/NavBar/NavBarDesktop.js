import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../../../images/svg/ba-logo-w.svg';
import { Link } from 'react-router-dom';

const NavBarDesktop = () => (
  <Menu secondary>
    <Menu.Item>
      <Link to="/">
        <Image src={logo} size="mini" />
      </Link>
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

export default NavBarDesktop;
