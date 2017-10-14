import React, { Component } from 'react';

import './styles.css';

class Totals extends Component {
  render() {
    return (
      <div className='totals'>
        <p className='s-txt'>Sub-total</p>
        <p className='s-txt b-txt'>Savings</p>
        <h2>Total</h2>
      </div>
    );
  }
}

export default Totals;
