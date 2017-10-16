import React, { Component } from 'react';

import './styles.css';

class Days extends Component {
  render() {
    return (
      <div className='days'>
        <form>
          <div>
            <input type='checkbox' className='weekday' id='sun' />
            <label for='sun'>
              Sun
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='mon' />
            <label for='mon'>
              Mon
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='tue' />
            <label for='tue'>
              Tue
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='wed' />
            <label for='wed'>
              Wed
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='thu' />
            <label for='thu'>
              Thu
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='fri' />
            <label for='fri'>
              Fri
            </label>
          </div>
          <div>
            <input type='checkbox' className='weekday' id='sat' />
            <label for='sat'>
              Sat
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Days;
