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
