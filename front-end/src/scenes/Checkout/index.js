import React, { Component } from 'react';

import Recurrence from './components/Recurrence/index.js';
import HomeType from './components/HomeType/index.js';
import Days from './components/Days/index.js';
import Hours from './components/Hours/index.js';
import Totals from './components/Totals/index.js';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {

    return (
      <div className='col'>
        <h1>Checkout</h1>
        <Recurrence />
        <HomeType />
        <Days />
        <Hours />
        <Totals />
      </div>
    );
  }
}

export default Checkout;
