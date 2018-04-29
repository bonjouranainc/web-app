import React from 'react';

import url1 from '../../images/svg/quality-img.svg';
import url2 from '../../images/svg/security-img.svg';
import url3 from '../../images/svg/clean-house-img.svg';
import url4 from '../../images/svg/ba-girl-cut.svg';
import url5 from '../../images/svg/ba-girl.svg';

import './styles.css';

const About = () => (
  <div className="about wrapper">
    <div className="row">
      <h2>¿Qué caracteriza nuestro servicio?</h2>
    </div>
    <div className="content">
      <div className="col">
        <img src={url1} alt="" />
        <h2>Servicio de calidad</h2>
      </div>
      <div className="col">
        <img src={url2} alt="" />
        <h2>Personal confiable y seguro</h2>
      </div>
      <div className="col">
        <img src={url3} alt="" />
        <h2>Hogar limpio y fresco</h2>
      </div>
      <div className="col">
        <img src={url4} alt="" className="girl-cut" />
      </div>
      <img src={url5} alt="" className="girl" />
    </div>
  </div>
);

export default About;
