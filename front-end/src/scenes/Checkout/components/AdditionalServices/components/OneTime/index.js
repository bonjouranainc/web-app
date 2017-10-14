import React, { Component } from 'react';

import '../../styles.css';

class OneTime extends Component {
  render() {
    return (
      <div className='one-time'>
        <div className='col'>
          <p className='b-txt'>Additional Services</p> 
            <p className='s-txt'>Escoja servicios adicionales</p>
        </div>
        <div className='row'>
          <button
            className='button-y-o' 
          >
            Estufa
          </button>
          <button
            className='button-y-o' 
          >
            Nevera
          </button>
          <button
            className='button-y-o' 
          >
            Patio o Terraza
          </button>
        </div>
        <div className='row'>
          <button
            className='button-y-o' 
          >
            Alacena y Gabinetes
          </button>
          <button
            className='button-y-o' 
          >
            Marquesina
          </button>
          <button
            className='button-y-o' 
          >
            Recogido del hogar
          </button>
        </div>
        <div className='row'>
          <button
            className='button-y-o' 
          >
            Laundry
          </button>
          <button
            className='button-y-o' 
          >
            Limpieza de parte frontal de la casa
          </button>
        </div>
      </div>
    );
  }
}

export default OneTime;
