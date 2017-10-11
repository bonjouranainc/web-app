import React, { Component } from 'react';

import Navigation from './Navigation.js';

import '../styles.css';

import url from '../../../images/svg/testimonial-img.svg';

class Testimonial2 extends Component {
  render() {
    return (
      <div className='testimonials wrapper'>
        <Navigation 
          _nextSlide={this.props._nextSlide} 
          _previousSlide={this.props._previousSlide} 
        />
        <div className='col'>
          <img src={ url } />
          <p className='b-txt'>Name</p>
          <p>Testimonial 2</p>
          <p>Quote about persons opinion on the product</p>
        </div>
      </div>
    );
  }
}

export default Testimonial2;
