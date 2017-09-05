import React, { Component } from 'react';

import url1 from '../../images/quality-img.svg';
import url2 from '../../images/security-img.svg';
import url3 from '../../images/clean-house-img.svg';

import './styles.css';

class About extends Component {
  render() {
    return(
      <div className='about wrapper'>
        <div>
          <h1 className='sh-txt-b'>Servicio de calidad</h1> 
          <embed src={ url1 } />
        </div>
        <div>
          <h1 className='sh-txt-b'>Personal confiable y seguro</h1> 
          <embed src={ url2 } />
        </div>
        <div>
          <h1 className='sh-txt-b'>Hogar limpio y fresco</h1> 
          <embed src={ url3 } />
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
