import React, { Component } from 'react';

import '../../styles.css';

class Subscription extends Component {
  render() {
    return (
      <div className='additional-services'>
        <div className='col'>
          <p className='b-txt'>Additional Services</p> 
            <p className='s-txt'>Escoja servicios adicionales</p>
        </div>
        <div className='subscription-services'>
          <input type='checkbox' className='service' id='compra' />
          <label for='compra'>
            Compra de Alimentos
          </label>
          <input type='checkbox' className='service' id='dry-cleaning' />
          <label for='dry-cleaning'>
            Dry-cleaning
          </label>
          <input type='checkbox' className='service' id='laundry' />
          <label for='laundry'>
            Laundry 
          </label>
          <input type='checkbox' className='service' id='sastre' />
          <label for='sastre'>
            Sastre
          </label>
          <input type='checkbox' className='service' id='zapatero' />
          <label for='zapatero'>
            Zapatero
          </label>
        </div>
      </div>
    );
  }
}

export default Subscription;
