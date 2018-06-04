import React from 'react';
import { Menu, Icon, Sidebar, Image } from 'semantic-ui-react';
import logo from '../../../images/svg/ba-logo-w.svg';
import { Link } from 'react-router-dom';

const NavBarMobile = ({ onPusherClick, onToggle, visible }) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      width="thin"
      vertical
      inverted
      visible={visible}
    >
      <Menu.Item name="servicio">
        <a href="">Servicios</a>
      </Menu.Item>
      <Menu.Item name="nosotros">
        <Link to="/about">Nosotros</Link>
      </Menu.Item>
      <Menu.Item name="como funciona">
        <Link to="/how">&iquest;Cómo funciona?</Link>
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: '100vh' }}
    >
      <Menu secondary>
        <Menu.Item>
          <Link to="/">
            <Image src={logo} size="mini" />
          </Link>
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <a href="https://bonjour-ana.myshopify.com/account/login">Login</a>
          </Menu.Item>
          <Menu.Item>
            <a href="https://bonjour-ana.myshopify.com/account/login">
              Sign Up
            </a>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default NavBarMobile;
