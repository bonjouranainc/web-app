import React, { Component } from 'react';

import url1 from '../../images/quality-img.svg';
import url2 from '../../images/security-img.svg';
import url3 from '../../images/clean-house-img.svg';

class About extends Component {
  render() {
    return(
      <div>
        <div>
          <h1>Servicio de calidad</h1> 
          <embed src={ url1 } />
        </div>
        <div>
          <h1>Personal confiable y seguro</h1> 
          <embed src={ url2 } />
        </div>
        <div>
          <h1>Hogar limpio y fresco</h1> 
          <embed src={ url3 } />
        </div>
      </div>
    ); 
  }
}

export default About;
