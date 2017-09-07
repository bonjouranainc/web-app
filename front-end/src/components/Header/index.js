import React, { Component } from 'react';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className='header'> 
        <div className='logo'>
          <h1 className='p-txt'>Bonjour Ana</h1>
        </div>
        <div className='menu'>
          <h1>#</h1>
        </div>
      </div>
    ); 
  }
}

export default Header;
