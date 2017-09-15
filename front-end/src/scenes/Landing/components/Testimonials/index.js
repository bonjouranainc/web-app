import React, { Component } from 'react';

import './styles.css';

import url from '../../images/svg/testimonial-img.svg';

class Testimonials extends Component {
  render() {
    return (
      <div className='testimonials wrapper'>
        <div className='col'>
          <img src={ url } />
          <p className='b-txt'>Name</p>
          <p>Who is it?</p>
          <p>Quote about persons opinion on the product</p>
        </div>
      </div>
    );
  }
}

export default Testimonials;
