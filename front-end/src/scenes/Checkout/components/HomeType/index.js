import React, { Component } from 'react';

import AmmountControls from './AmmountControls.js';

import './styles.css';

class HomeType extends Component {
  render() {
    return (
      <div className='home-type'>
        <div className='col'>
          <p className='b-txt'>Home Type</p>
          <p className='s-txt'>Escoja el tipo de casa</p>
        </div>
        <div className='row'>
          <input type='checkbox' className='home-type' id='casa' />
          <label for='casa'>
            Casa
          </label>
          <input type='checkbox' className='home-type' id='apartamento' />
          <label for='apartamento'>
            Apartamento
          </label>
        </div>
        <div className='row'>
          <p>Pisos</p>
          <AmmountControls />
        </div>
        <div className='row'>
          <p>Cuartos</p>
          <AmmountControls />
        </div>
        <div className='row'>
          <p>Banos</p>
          <AmmountControls />
        </div>
      </div>
    );
  }
}

export default HomeType;
