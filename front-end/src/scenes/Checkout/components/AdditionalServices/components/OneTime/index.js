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
          <input type='checkbox' className='service' id='estufa' />
          <label for='estufa'>
            Estufa
          </label>
          <input type='checkbox' className='service' id='nevera' />
          <label for='nevera'>
            Nevera
          </label>
          <input type='checkbox' className='service' id='patio' />
          <label for='patio'>
            Patio o Terraza
          </label>
          <input type='checkbox' className='service' id='alacena' />
          <label for='alacena'>
            Alacena y Gabinetes
          </label>
          <input type='checkbox' className='service' id='marquesina' />
          <label for='marquesina'>
            Marquesina
          </label>
          <input type='checkbox' className='service' id='recogido' />
          <label for='recogido'>
            Recogido del hogar
          </label>
          <input type='checkbox' className='service' id='laundry' />
          <label for='laundry'>
            Laundry
          </label>
          <input type='checkbox' className='service' id='landscaping' />
          <label for='landscaping'>
            Limpieza de parte frontal de la casa
          </label>
        </div>
      </div>
    );
  }
}

export default OneTime;
