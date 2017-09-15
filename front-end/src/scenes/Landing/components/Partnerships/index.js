import React, { Component } from 'react';

import './styles.css';

class Partnerships extends Component {
  render() {
    return (
      <div className='partnerships wrapper'>
        <div className='col'>
          <h1 className='b-txt'>Partnerships</h1>
        </div>
        <div className='col'>
          <p>Eres realtor, dueño de propiedades vacacionales 
        y/o desarrollador y estas interesado en nuestros
        servicios?</p>
        </div>
        <div>
          <a href='#' className='button-b'>
            Boton
          </a>
        </div>
      </div>
    );
  }
}

export default Partnerships;
