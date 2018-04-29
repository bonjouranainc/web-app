import React from 'react';

import facebook from '../../images/svg/facebook-icon.svg';
import twitter from '../../images/svg/twitter-icon.svg';
import instagram from '../../images/svg/instagram-icon.svg';

import './styles.css';

const FooterTop = () => (
  <div className="footerTop">
    <div className="social">
      <a
        href="http://facebook.com/bonjouranainc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="" />
      </a>
      <a
        href="http://instagram.com/bonjouranainc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="" />
      </a>
      <a
        href="http://twitter.com/bonjouranainc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="" />
      </a>
    </div>
    <div className="info">
      <div className="more s-txt">
        <a href="mailto:hi@bonjourana.com">Unete a nosotros</a>
        <a href="https://bonjour-ana.myshopify.com/pages/preguntas-frecuentes">
          FAQ
        </a>
      </div>
      <div className="locations s-txt">
        <p className="b-txt">Locations</p>
        <p>San Juan</p>
        <p>Carolina</p>
        <p>Guaynabo</p>
        <p>Canóvanas</p>
        <p>Caguas</p>
        <p>Bayamón</p>
      </div>
      <div className="locations s-txt">
        <p>Trujillo Alto</p>
        <p>Toa Baja</p>
        <p>Toa Alta</p>
        <p>Dorado</p>
        <p>Cataño</p>
        <p>Río Grande</p>
      </div>
    </div>
  </div>
);

export default FooterTop;
