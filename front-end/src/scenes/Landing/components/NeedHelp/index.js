import React, { Component } from 'react';

import './styles.css';

class NeedHelp extends Component {
  render() {
    return (
      <div className='needHelp wrapper'> 
        <div className='col'>
          <h1>¿Necesitas Ayuda?</h1>
          <h1 className='b-txt'>¡Te resolvemos!</h1>
        </div>
        <div className='btn-group'>
          <a href='#' className='button-y-o'> 
            Handyman
          </a>
          <a href='#' className='button-y-o'> 
            Plomero
          </a>
          <a href='#' className='button-y-o'> 
            Electricista
          </a>
          <a href='#' className='button-y-o'> 
            Compra de alimentos
          </a>
          <a href='#' className='button-y-o'> 
            Laundry en el hogar
          </a>
          <a href='#' className='button-y-o'> 
            Recogido del hogar
          </a>
        </div>
      </div>
    );
  }
}

export default NeedHelp;
