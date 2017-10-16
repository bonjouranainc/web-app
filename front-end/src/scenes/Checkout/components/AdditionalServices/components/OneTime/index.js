import React, { Component } from 'react';

import '../../styles.css';

class OneTime extends Component {
  render() {
    return (
      <div className='additional-services'>
        <div className='col'>
          <p className='b-txt'>Additional Services</p> 
            <p className='s-txt'>Escoja servicios adicionales</p>
        </div>
        <div className='one-time-services'>
          <input type='checkbox' className='service' id='' />
          <label for=''>
            Estufa
          </label>
          <input type='checkbox' className='service' id='' />
          <label for=''>
            Nevera
          </label>
          <input type='checkbox' className='service' id='' />
          <label for=''>
            Patio o Terraza
          </label>
          <input type='checkbox' className='service' id='' />
          <label for=''>
            Alacena y Gabinetes
          </label>
          <input type='checkbox' className='service' id='' />
          <label for=''>
            Marquesina
          </label>
          <input type='checkbox' className='service' id='' />
          <label for=''>
            Recogido del hogar
          </label>
          <input type='checkbox' className='service' id='' />
          <label for=''>
            Laundry
          </label>
          <input type='checkbox' className='service' id='' />
          <label for=''>
            Limpieza de parte frontal de la casa
          </label>
        </div>
      </div>
    );
  }
}

export default OneTime;
