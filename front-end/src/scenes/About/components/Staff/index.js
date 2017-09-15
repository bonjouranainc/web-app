import React, { Component } from 'react';

import './styles.css';

class Staff extends Component {
  render() {
    return (
      <div className='staff wrapper'>
        <div className='row'>
          <h1 className='b-txt'>Staff</h1>
        </div>
        <div className='row'>
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
        <div className='row'>
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
          <a href='#' className='button-y'>Join Us</a>
      </div>
    );
  }
}

export default Staff;
