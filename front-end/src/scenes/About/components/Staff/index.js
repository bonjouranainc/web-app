import React, { Component } from 'react';

import './styles.css';

class Staff extends Component {
  render() {
    return (
      <div className='staff wrapper'>
        <div className='row staff-header'>
          <h1 className='b-txt'>Staff</h1>
        </div>
        <div className='row staff-body'>
          <div className='person'>
            <h2>image</h2>
          </div>
          <div className='person'>
            <h2>image</h2>
          </div>
          <div className='person'>
            <h2>image</h2>
          </div>
          <div className='person'>
            <h2>image</h2>
          </div>
          <div className='person'>
            <h2>image</h2>
          </div>
        </div>
        <div className='row staff-body'>
          <div className='person'>
            <h2>image</h2>
          </div>
          <div className='person'>
            <h2>image</h2>
          </div>
          <div className='person'>
            <h2>image</h2>
          </div>
          <div className='person'>
            <h2>image</h2>
          </div>
          <div className='person'>
            <h2>image</h2>
          </div>
        </div>
          <a href='mailto:hi@bonjourana.com' className='button-y'>Join Us</a>
      </div>
    );
  }
}

export default Staff;
