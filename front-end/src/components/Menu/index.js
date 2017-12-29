import React, { Component } from 'react';

import './styles.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this._goBack = this._goBack.bind(this);
  }

  render() {
    return(
      <div className='menu-wrapper'>
        <div className='menu'>
          <div>
            <h1>Menu</h1>
          </div>
          <div className='menu-btns'>
            <a href='https://bonjour-ana.myshopify.com/collections/servicio-al-hogar'>
              Servicios
            </a>
            <a href='https://bonjourana.wixsite.com/bonjourana/supermercado'> 
              Supermercado
            </a>
            <a href='https://bonjour-ana.myshopify.com/account/login'> 
              Sign in
            </a>
          </div>
          <button onClick={this._goBack} >
            <i className="material-icons">&#xE5C4;</i> 
          </button>
        </div>
      </div>
    ); 
  }

  _goBack() {
    this.props.history.goBack(); 
  }
}

export default Menu;
