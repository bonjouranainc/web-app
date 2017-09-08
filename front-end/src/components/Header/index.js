import React, { Component } from 'react';

import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className='header'> 
        <div className='logo'>
          <h1 className='h-txt-r'>BA</h1>
        </div>
        <div className='menu'>
          <i class="material-icons">&#xE5D2;</i>
        </div>
      </div>
    ); 
  }
}

export default Header;
