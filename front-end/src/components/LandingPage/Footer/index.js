import React, { Component } from 'react';

import FooterTop from './FooterTop.js';
import FooterBottom from './FooterBottom.js';

import './index.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <FooterTop />
        <FooterBottom />
      </div>
    );
  }
}

export default Footer;
