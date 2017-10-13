import React, { Component } from 'react';

import Recurrence from './components/Recurrence/index.js';
import Services from './components/Services/index.js';
import AdditionalServices from './components/AdditionalServices/index.js';
import HomeType from './components/HomeType/index.js';
import Days from './components/Days/index.js';
import Hours from './components/Hours/index.js';
import Totals from './components/Totals/index.js';

class Checkout extends Component {
  render() {

    return (
      <div className='wrapper'>
        <h1>Checkout</h1>
        <Recurrence />
        <AdditionalServices />
        <HomeType />
      </div>
    );
  }
}

export default Checkout;
