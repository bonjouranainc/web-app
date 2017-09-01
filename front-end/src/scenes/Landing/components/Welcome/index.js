import React, { Component } from 'react';
import url from '../../images/welcome-img.svg';

class Welcome extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div>
          <h1>Completamos tus tareas del hogar y
          necesidades diarias</h1>
        </div>
        <div>
          <a href='#' className='button-y'>
            Limpieza
          </a>
          <a href='#' className='button-y'>
            Servicios
          </a>
        </div>
        <div>
          <embed src={ url } />
        </div>
      </div>
    );
  }
}

export default Welcome;
