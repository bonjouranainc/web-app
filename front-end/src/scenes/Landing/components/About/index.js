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
        <div>
          <h1 className='sh-txt-b'>Servicio de calidad</h1> 
          <img src={ url1 } onerror='this.src={ fallback1 }' />
        </div>
        <div>
          <h1 className='sh-txt-b'>Personal confiable y seguro</h1> 
          <embed src={ url2 } onerror='this.src={ fallback2 }' />
        </div>
        <div>
          <h1 className='sh-txt-b'>Hogar limpio y fresco</h1> 
          <embed src={ url3 } onerror='this.src={ fallback3 }' />
        </div>
        <div>
          <a href='#' className='button-y'>
            Learn More
          </a>
        </div>
      </div>
    ); 
  }
}

export default About;
