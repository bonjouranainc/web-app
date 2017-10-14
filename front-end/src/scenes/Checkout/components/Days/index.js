import React, { Component } from 'react';

import './styles.css';

class Days extends Component {
  render() {
    return (
      <div className='days'>
        <form>
          <div>
            <input type='checkbox' className='weekday' id='sun' />
            <lable for='sun'>
              Sun
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='mon' />
            <lable for='mon'>
              Mon
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='tue' />
            <lable for='tue'>
              Tue
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='wed' />
            <lable for='wed'>
              Wed
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='thu' />
            <lable for='thu'>
              Thu
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='fri' />
            <lable for='fri'>
              Fri
            </lable>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='sat' />
            <lable for='sat'>
              Sat
            </lable>
          </div>
        </form>
      </div>
    );
  }
}

export default Days;
