import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

import '../../styles/components/NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="navbar">
        <Responsive minWidth={320} maxWidth={1199}>
          <NavBarMobile
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
}
