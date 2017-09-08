import React, { Component } from 'react';

import url1 from '../../images/svg/quality-img.svg';
import url2 from '../../images/svg/security-img.svg';
import url3 from '../../images/svg/clean-house-img.svg';

import fallback1 from '../../images/png/quality-img.png';
import fallback2 from '../../images/png/security-img.png';
import fallback3 from '../../images/png/clean-house-img.png';

import './styles.css';

class About extends Component {
  render() {
    return(
      <div className='about wrapper'>
        <div className='row'>
          <h2>Servicio de calidad</h2> 
          <img src={ url1 } onerror='this.src={ fallback1 }' />
        </div>
        <div className='row'>
          <h2>Personal confiable y seguro</h2> 
          <img src={ url2 } onerror='this.src={ fallback2 }' />
        </div>
        <div className='row'>
          <h2>Hogar limpio y fresco</h2> 
          <img src={ url3 } onerror='this.src={ fallback3 }' />
        </div>
        <a href='#' className='button-y'>
          Learn More
        </a>
      </div>
    ); 
  }
}

export default About;
