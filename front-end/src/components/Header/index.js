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
        <div className='menu s-txt'>
          <a href='#'>
            <p>Register</p>
          </a>
          <a href='#'>
            <p>Sign in</p>
          </a>
        </div>
      </div>
    ); 
  }
}

export default Header;
