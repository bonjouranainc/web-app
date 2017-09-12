import React, { Component } from 'react';

import logo from './images/ba-logo.svg';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className='header'> 
        <div className='logo'>
          <a href='#'>
            <img src={ logo } />
          </a>
        </div>
        <div className='menu'>
          <i className="material-icons">menu</i>
        </div>
      </div>
    ); 
  }
}

export default Header;
