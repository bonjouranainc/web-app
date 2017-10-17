import React, { Component } from 'react';

import './styles.css';

class Days extends Component {
  render() {
    return (
      <div className='days wrapper'>
        <div className='col'>
          <p className='b-txt'>Dias</p>
          <p className='s-txt'>Escoja dos dias en los que pueda 
          recibir nuestra visita</p>
        </div>
        <div className='btn-group'>
          <div className='inline-picker'>
            <label for='sun'>
            <input type='checkbox' className='weekday' id='sun' />
              <span>Sun</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='mon'>
            <input type='checkbox' className='weekday' id='mon' />
              <span>Mon</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='tue'>
            <input type='checkbox' className='weekday' id='tue' />
              <span>Tue</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='wed'>
            <input type='checkbox' className='weekday' id='wed' />
              <span>Wed</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='thu'>
            <input type='checkbox' className='weekday' id='thu' />
              <span>Thu</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='fri'>
            <input type='checkbox' className='weekday' id='fri' />
              <span>Fri</span>
            </label>
          </div>
          <div className='inline-picker'>
            <label for='sat'>
            <input type='checkbox' className='weekday' id='sat' />
              <span>Sat</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Days;
