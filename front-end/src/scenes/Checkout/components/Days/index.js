import React, { Component } from 'react';

import './styles.css';

class Days extends Component {
  render() {
    return (
      <div className='days'>
        <input type='checkbox' className='weekday' id='sun' />
        <label for='sun'>
          Sun
        </label>
        <input type='checkbox' className='weekday' id='mon' />
        <label for='mon'>
          Mon
        </label>
        <input type='checkbox' className='weekday' id='tue' />
        <label for='tue'>
          Tue
        </label>
        <input type='checkbox' className='weekday' id='wed' />
        <label for='wed'>
          Wed
        </label>
        <input type='checkbox' className='weekday' id='thu' />
        <label for='thu'>
          Thu
        </label>
        <input type='checkbox' className='weekday' id='fri' />
        <label for='fri'>
          Fri
        </label>
        <input type='checkbox' className='weekday' id='sat' />
        <label for='sat'>
          Sat
        </label>
      </div>
    );
  }
}

export default Days;
