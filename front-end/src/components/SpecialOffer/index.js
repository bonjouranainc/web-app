import React, { Component } from 'react';

import './styles.css';

class SpecialOffer extends Component {
  render() {
    return(
      <div className='wrapper special-offer'>
        <div className='col'>
          <h1>OFERTA</h1>
          <p>Prueba nuestro servicio de limpieza sin importar la cantidad de 
          habitaciones que tenga su hogar.
          </p>
          <a href='http://bit.ly/BAOfertaDeLimpieza' className='button-y'>
            Pruebalo!
          </a>
        </div>
      </div>
    ); 
  }
}

export default SpecialOffer;
