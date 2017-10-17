import React, { Component } from 'react';

import AmmountControls from './AmmountControls.js';

import './styles.css';

class HomeType extends Component {
  render() {
    return (
      <div className='home-type wrapper'>
        <div className='col'>
          <p className='b-txt'>Home Type</p>
          <p className='s-txt'>Escoja el tipo de casa</p>
        </div>
        <div className='btn-group'>
          <button
            className='button-y-o'
          >
          Casa
          </button>
          <button
            className='button-y-o'
          >
          Apartamento
          </button>
        </div>
        <div className='col'>
          <p>Pisos</p>
          <AmmountControls />
        </div>
        <div className='col'>
          <p>Cuartos</p>
          <AmmountControls />
        </div>
        <div className='col'>
          <p>Banos</p>
          <AmmountControls />
        </div>
      </div>
    );
  }
}

export default HomeType;
