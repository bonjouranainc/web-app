import React, { Component } from 'react';

import './styles.css';

class Recurrence extends Component {
  render() {
    return (
      <div className='recurrence wrapper'>
        <div className='col'>
          <p className='b-txt'>Recurrence</p> 
          <p className='s-txt'>Escoja la recurrencia de los servicios</p>
        </div>
        <div className='row'>
          <button
            className='button-y-o' 
          >
            Semanal
          </button>
          <button
            className='button-y-o' 
          >
            Bi-Semanal
          </button>
          <button
            className='button-y-o' 
          >
            Mensual 
          </button>
          <button
            className='button-y-o' 
          >
            Una Vez
          </button>
        </div>
      </div>
    );
  }
}

export default Recurrence;
