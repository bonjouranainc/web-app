import React from 'react';
import { Menu, Icon, Sidebar, Image } from 'semantic-ui-react';
import logo from '../../../images/svg/ba-logo-w.svg';
import { Link } from 'react-router-dom';

const navBarColor = {
  backgroundColor: '#f5f4ed'
};

const linkColors = {
  color: 'rgba(0, 0, 0, 0.6)'
};

const NavBarMobile = ({ onPusherClick, onToggle, visible }) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      width="thin"
      vertical
      inverted
      direction="right"
      visible={visible}
      style={navBarColor}
    >
      <Menu.Item name="servicio">
        <a style={linkColors} href="">
          Servicios
        </a>
      </Menu.Item>
      <Menu.Item name="nosotros">
        <Link style={linkColors} to="/about">
          Nosotros
        </Link>
      </Menu.Item>
      <Menu.Item name="como funciona">
        <Link style={linkColors} to="/how">
          &iquest;Cómo funciona?
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a
          style={linkColors}
          href="https://bonjour-ana.myshopify.com/account/login"
        >
          Log In
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          style={linkColors}
          href="https://bonjour-ana.myshopify.com/account/login"
        >
          Sign Up
        </a>
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
        <Menu.Item position="right" onClick={onToggle}>
          <Icon name="sidebar" style={{ color: '#fff' }} />
        </Menu.Item>
      </Menu>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default NavBarMobile;
