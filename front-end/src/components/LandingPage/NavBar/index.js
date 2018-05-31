import React, { Component } from 'react';
import { Menu, Icon, Sidebar, Responsive, Image } from 'semantic-ui-react';
import logo from '../../../images/svg/ba-logo-w.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const NavBarMobile = ({
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      items={leftItems}
      vertical
      inverted
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: '100vh' }}
    >
      <Menu secondary>
        <Menu.Item>
          <Image src={logo} size="mini" href="/" />
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

const NavBarDesktop = () => (
  <Menu secondary>
    <Menu.Item>
      <Image src={logo} size="mini" href="/" />
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

export default class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div className="header">
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          />
        </Responsive>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
        </Responsive>
      </div>
    );
  }
}

const leftItems = [
  { as: 'a', content: 'Servicios', key: 'servicios' },
  { as: 'a', content: 'Nosotros', key: 'nosotros' },
  { as: 'a', content: '&iquest;Cómo funciona?', key: 'comoFunciona' }
];
const rightItems = [
  { as: 'a', content: 'Login', key: 'login' },
  { as: 'a', content: 'Sign Up', key: 'signup' }
];
