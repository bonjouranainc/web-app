import React, { Component } from 'react';

import HomeType from '../../../HomeType/index.js';

import '../../styles.css';

class OneTime extends Component {
  render() {
    return (
      <div className='additional-services wrapper'>
        <div className='col'>
          <p className='b-txt'>Additional Services</p> 
          <p className='s-txt'>Escoja servicios adicionales</p>
        </div>
        <div className='btn-group'>
          <div className='checkbox-btn'>
            <label for='estufa'>
            <input type='checkbox' className='service' id='estufa' />
              <span>Estufa</span>
            </label>
          </div>
          <div className='checkbox-btn'>
            <label for='nevera'>
              <input type='checkbox' className='service' id='nevera' />
                <span>Nevera</span>
            </label>
          </div>
          <div className='checkbox-btn'>
          <label for='patio'>
            <input type='checkbox' className='service' id='patio' />
              <span>Patio o Terraza</span>
          </label>
          </div>
          <div className='checkbox-btn'>
          <label for='alacena'>
            <input type='checkbox' className='service' id='alacena' />
              <span>Alacena y Gabinetes</span>
          </label>
          </div>
          <div className='checkbox-btn'>
          <label for='recogido'>
            <input type='checkbox' className='service' id='recogido' />
              <span>Recogido del hogar</span>
          </label>
          </div>
          <div className='checkbox-btn'>
          <label for='laundry'>
            <input type='checkbox' className='service' id='laundry' />
              <span>Laundry</span>
          </label>
          </div>
          <div className='checkbox-btn'>
          <label for='landscaping'>
            <input type='checkbox' className='service' id='landscaping' />
              <span>Limpieza de parte frontal de la casa</span>
          </label>
          </div>
        </div>
      </div>
    );
  }
}

export default OneTime;
