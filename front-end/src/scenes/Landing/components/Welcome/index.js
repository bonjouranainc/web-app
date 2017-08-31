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
          <button>Limpieza</button> 
          <button>Servicios</button>
        </div>
        <div>
          <embed src={ url } />
        </div>
      </div>
    );
  }
}

export default Welcome;
