import React, { Component } from 'react';

import '../../styles.css';

class Subscription extends Component {
  render() {
    return (
      <div className='additional-services'>
        <div className='row'>
          <button
            className='button-y-o' 
          >
            Compra de Alimentos
          </button>
          <button
            className='button-y-o' 
          >
            Dry-cleaning
          </button>
          <button
            className='button-y-o' 
          >
            Laundry 
          </button>
        </div>
        <div className='row'>
          <button
            className='button-y-o' 
          >
            Sastre
          </button>
          <button
            className='button-y-o' 
          >
            Zapatero
          </button>
        </div>
      </div>
    );
  }
}

export default Subscription;
