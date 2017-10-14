import React, { Component } from 'react';

import './styles.css';

class Hours extends Component {
  render() {
    return (
      <div className='hours'>
        <form>
          <div>
            <input type='checkbox' className='weekday' id='sun' />
            <lable for='7'>
              7 AM
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='mon' />
            <lable for='8'>
              8 AM
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='tue' />
            <lable for='9'>
              9 AM
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='wed' />
            <lable for='10'>
              10 AM
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='thu' />
            <lable for='11'>
              11 AM
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='fri' />
            <lable for='12'>
              12 PM
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='sat' />
            <lable for='1'>
              1 PM
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='sat' />
            <lable for='2'>
              2 PM
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='sat' />
            <lable for='3'>
              3 PM
            </lable>
          </div>
        </form>
      </div>
    );
  }
}

export default Hours;
