import React, { Component } from 'react';

import './styles.css';

class Welcome extends Component {
  render() {
    return (
      <div className='l-welcome wrapper'>
        <div className='main'>
          <div className='header-txt'>
            <h1>Completamos <br/>
            tus <span className='b-txt'>tareas del hogar</span> <br/>
            y <span className='b-txt'>necesidades diarias</span></h1>
          </div>
          <div className='welcome-btns'>
            <a href='https://bonjourana.com/collections/servicio-al-hogar/products/servicio-de-limpieza' 
            className='button-y'>
              Limpieza
            </a>
            <a href='https://bonjourana.com/collections/servicio-al-hogar' 
            className='button-y'>
              Servicios
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
