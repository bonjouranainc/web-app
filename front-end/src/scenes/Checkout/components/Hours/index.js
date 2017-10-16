import React, { Component } from 'react';

import './styles.css';

class Hours extends Component {
  render() {
    return (
      <div className='hours'>
          <div className='inline-picker'>
            <label for='7'>
            <input type='checkbox' className='weekday' id='sun' />
              <span>7 AM</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='8'>
            <input type='checkbox' className='weekday' id='mon' />
              <span>8 AM</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='9'>
            <input type='checkbox' className='weekday' id='tue' />
              <span>9 AM</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='10'>
            <input type='checkbox' className='weekday' id='wed' />
              <span>10 AM</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='11'>
            <input type='checkbox' className='weekday' id='thu' />
              <span>11 AM</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='12'>
            <input type='checkbox' className='weekday' id='fri' />
              <span>12 PM</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='1'>
            <input type='checkbox' className='weekday' id='sat' />
              <span>1 PM</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='2'>
            <input type='checkbox' className='weekday' id='sat' />
              <span>2 PM</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='3'>
            <input type='checkbox' className='weekday' id='sat' />
              <span>3 PM</span>
            </label>
          </div>
      </div>
    );
  }
}

export default Hours;
