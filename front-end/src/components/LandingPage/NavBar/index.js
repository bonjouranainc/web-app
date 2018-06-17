import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';
import NavBarTablet from './NavBarTablet';

import './styles.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      headerColor: false
    };

    this.changeHeaderColor = this.changeHeaderColor.bind(this);
  }

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.changeHeaderColor);
  }

  render() {
    const { visible } = this.state;
    let changeColor = this.state.changeColor ? '#ebd831' : 'rgba(0, 0, 0, 0.6)';

    return (
      <div className="navbar">
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
            style={{ backgroundColor: changeColor }}
          />
        </Responsive>

        <Responsive {...Responsive.onlyTablet}>
          <NavBarTablet
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          />
        </Responsive>

        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          <NavBarDesktop />
        </Responsive>
      </div>
    );
  }

  changeHeaderColor() {
    window.scrollY > 500
      ? this.setState({ headerColor: true })
      : this.setState({ headerColor: false });
  }
}
