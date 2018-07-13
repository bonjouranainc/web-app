import React, { Component } from 'react';
import NavBar from './NavBar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

export default class Nav extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen
    }));
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    return (
      <div>
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {this.state.sideDrawerOpen && (
          <Backdrop click={this.backdropClickHandler} />
        )}
      </div>
    );
  }
}
