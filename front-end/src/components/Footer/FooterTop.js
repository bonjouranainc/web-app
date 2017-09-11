import React, { Component } from 'react';

import facebook from './images/facebook-icon.svg';
import twitter from './images/twitter-icon.svg';
import instagram from './images/instagram-icon.svg';
import medium from './images/Monogram.svg';

import './styles.css';

class FooterTop extends Component {
  render() {
    return (
      <div className='footerTop'> 
        <div className='social'>
          <img src={ facebook } />
          <img src={ medium } />
          <img src={ instagram } />
          <img src={ twitter } />
        </div>
        <div className='info'>
          <div className='more s-txt'>
            <a href='#'>
              Sobre BA
            </a>
            <a href='#'>
              Blog
            </a>
            <a href='#'>
              Gift cards
            </a>
            <a href='#'>
              Testimonials
            </a>
            <a href='#'>
              Partners  
            </a>
            <a href='#'>
              Unete a nosotros
            </a>
          </div>
          <div className='locations s-txt'>
            <p className='b-txt'>Locations</p>
            <p>San Juan</p>
            <p>Carolina</p>
            <p>Guaynabo</p>
            <p>Canovanas</p>
            <p>Caguas</p>
            <p>Trujillo Alto</p>
            <p>Bayamon</p>
          </div>
        </div>
      </div>
    ); 
  }
}

export default FooterTop;
