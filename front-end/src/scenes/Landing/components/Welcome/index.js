import React, { Component } from 'react';

import url from '../../images/svg/welcome-img.svg';
import fallback from '../../images/png/welcome-img.png';

import './styles.css';

class Welcome extends Component {
  render() {
    return (
      <div className='welcome wrapper'>
        <div className='header-txt'>
          <h1 className='h-txt-b'>Completamos tus tareas del hogar y
          necesidades diarias</h1>
        </div>
        <div className='welcome-btns'>
          <a href='#' className='button-y'>
            Limpieza
          </a>
          <a href='#' className='button-y'>
            Servicios
          </a>
        </div>
        <img src={ url } onerror='this.src={ fallback }' />
      </div>
    );
  }
}

export default Welcome;
