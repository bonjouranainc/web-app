import React, { Component } from 'react';

import './styles.css';

class Hours extends Component {
  render() {
    return (
      <div className='hours'>
        <form>
          <div>
            <input type='checkbox' className='weekday' id='sun' />
            <label for='7'>
              7 AM
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='mon' />
            <label for='8'>
              8 AM
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='tue' />
            <label for='9'>
              9 AM
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='wed' />
            <label for='10'>
              10 AM
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='thu' />
            <label for='11'>
              11 AM
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='fri' />
            <label for='12'>
              12 PM
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='sat' />
            <label for='1'>
              1 PM
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='sat' />
            <label for='2'>
              2 PM
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='sat' />
            <label for='3'>
              3 PM
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Hours;
