import React, { Component } from 'react';

import url from '../../images/svg/welcome-img.svg';
import fallback from '../../images/png/welcome-img.png';

import './styles.css';

class Welcome extends Component {
  render() {
    return (
      <div className='welcome wrapper'>
        <div className='main'>
          <div className='header-txt'>
            <h1>Completamos <br/>
            tus <span className='b-txt'>tareas del hogar</span> <br/>
            y <span className='b-txt'>necesidades diarias</span></h1>
          </div>
          <div className='welcome-btns'>
            <a href='#' className='button-y'>
              Limpieza
            </a>
            <a href='#' className='button-y'>
              Servicios
            </a>
          </div>
        </div>
        <img src={ url } onerror='this.src={ fallback }' />
      </div>
    );
  }
}

export default Welcome;
