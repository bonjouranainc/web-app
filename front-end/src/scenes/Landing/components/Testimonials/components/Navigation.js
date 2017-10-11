import React, { Component } from 'react';

import Testimonial1 from './Testimonial1.js'

import '../styles.css';

class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <button onClick={ this.props._previousSlide }>
          <i className="material-icons">&#xE5C4;</i>
        </button>
        <button onClick={ this.props._nextSlide }>
          <i className="material-icons">&#xE5C8;</i>
        </button>
      </div>
    );
  }
}

export default Navigation;
