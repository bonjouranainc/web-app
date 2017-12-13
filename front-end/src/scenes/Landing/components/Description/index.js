import React, { Component } from 'react';

import './styles.css';

class Description extends Component {
  render() {
    return(
      <div className='description wrapper'>
        <div className='col'>
          <h2 className='b-txt'>
            Enfocate en lo que realmente importa.
          </h2>
          <h2>
            Bonjour Ana es tu asistente personal para el hogar
            y necesidades diarias.
          </h2>
        </div>
        <div className='col'>
          <a href='#' className='button-y'>
            Coordinar cita de bienvenida
          </a>
        </div>
      </div>
    ); 
  }
}

export default Description;
