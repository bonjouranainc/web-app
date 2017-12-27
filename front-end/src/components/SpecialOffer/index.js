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
          <a href='https://bonjour-ana.myshopify.com/products/especial-de-limpieza' className='button-black'>
            ¡Pruébalo!
          </a>
        </div>
      </div>
    ); 
  }
}

export default SpecialOffer;
