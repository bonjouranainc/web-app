import React, { Component } from 'react';

import './styles.css';

class FooterBottom extends Component {
  render() {
    return (
      <div className='footerBottom'> 
        <a href='#' className='s-txt'>
          FAQ
        </a>
         <a href='/terms' className='s-txt'>
          Terms & Privacy
        </a>
        <p className='s-txt'>@2017 Bonjour Ana Inc.</p>
      </div>
    ); 
  }
}

export default FooterBottom;
