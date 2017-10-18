import React, { Component } from 'react';

import HomeType from '../../../HomeType/index.js';
import Prices from '../Prices.js';

import '../../styles.css';

class Subscription extends Component {
  render() {
    return (
      <div className='additional-services wrapper'>
        <div className='col'>
          <p className='b-txt'>Additional Services</p> 
            <p className='s-txt'>Escoja servicios adicionales</p>
        </div>
        <div className='btn-group'>
          <div className='checkbox-btn'>
          <label for='compra'>
          <input type='checkbox' className='service' id='compra' />
            <span>Compra de Alimentos</span>
          </label>
          </div>
          <div className='checkbox-btn'>
            <label for='dry-cleaning'>
            <input type='checkbox' className='service' id='dry-cleaning' />
              <span>Dry-cleaning</span>
            </label>
          </div>
          <div className='checkbox-btn'>
            <label for='laundry'>
            <input type='checkbox' className='service' id='laundry' />
              <span>Laundry</span>
            </label>
          </div>
          <div className='checkbox-btn'>
            <label for='sastre'>
            <input type='checkbox' className='service' id='sastre' />
              <span>Sastre</span>
            </label>
          </div>
          <div className='checkbox-btn'>
            <label for='zapatero'>
            <input type='checkbox' className='service' id='zapatero' />
              <span>Zapatero</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscription;
