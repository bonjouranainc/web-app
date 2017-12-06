import React, { Component } from 'react';

import url from '../../images/svg/handshake.svg';

import './styles.css';

class Partnerships extends Component {
  render() {
    return (
      <div className='partnerships wrapper'>
        <div className='col'>
          <h1 className='b-txt'>Partnerships</h1>
          <p>Eres realtor, dueño de propiedades vacacionales 
        y/o desarrollador y estas interesado en nuestros
        servicios?</p>
        </div>
        <div className='col'>
          <img src={ url } />
        </div>
        <div className='col partnershipButton'>
          <a href='hi@bonjourana.com' className='button-b'>
            Partnerships
          </a>
        </div>
      </div>
    );
  }
}

export default Partnerships;
