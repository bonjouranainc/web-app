import React from 'react';

import facebook from '../../images/svg/facebook-icon.svg';
import twitter from '../../images/svg/twitter-icon.svg';
import instagram from '../../images/svg/instagram-icon.svg';

import './styles.css';

const FooterTop = () => (
  <div className="footer-top">
    <div className="social-container">
      <a
        href="http://facebook.com/bonjouranainc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="" />
      </a>

      <a
        href="http://twitter.com/bonjouranainc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="" />
      </a>

      <a
        href="http://instagram.com/bonjouranainc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="" />
      </a>
    </div>

    <div className="links-container">
      <ul>
        <li>
          <a href="#">Sobre BA</a>
        </li>
        <li>
          <a href="#">Preguntas Frecuentes</a>
        </li>
        <li>
          <a href="#">Partnerships</a>
        </li>
        <li>
          <a href="#">Ayuda</a>
        </li>
        <li>
          <a href="#">Contactanos</a>
        </li>
      </ul>
    </div>

    <div className="locations-container">
      <p className="b-txt">Pueblos</p>
      <ul>
        <li>San Juan</li>
        <li>Carolina</li>
        <li>Guaynabo</li>
        <li>Canovanas</li>
        <li>Caguas</li>
        <li>Bayamon</li>
        <li>Trujillo Alto</li>
        <li>Toa Baja</li>
        <li>Toa Alta</li>
        <li>Dorado</li>
        <li>Cataño</li>
        <li>Rio Grande</li>
      </ul>
    </div>

    <div className="services-container">
      <p className="b-txt">Servicios</p>
      <ul>
        <li>Limpieza</li>
        <li>Laundry</li>
        <li>Limpieza de Ventanas</li>
        <li>Patio</li>
        <li>Aires Acondicionados</li>
        <li>Pintura</li>
        <li>Plomeria</li>
        <li>Handyman</li>
        <li>Zapatero</li>
        <li>Recogido del hogar</li>
      </ul>
    </div>
  </div>

  // <div className="footerTop">
  //   <div className="social">
  //     <a
  //       href="http://facebook.com/bonjouranainc"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <img src={facebook} alt="" />
  //     </a>
  //     <a
  //       href="http://instagram.com/bonjouranainc"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <img src={instagram} alt="" />
  //     </a>
  //     <a
  //       href="http://twitter.com/bonjouranainc"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <img src={twitter} alt="" />
  //     </a>
  //   </div>
  //   <div className="info">
  //     <div className="more s-txt">
  //       <a href="#">Sobre BA</a>
  //       <a href="https://bonjour-ana.myshopify.com/pages/preguntas-frecuentes">
  //         Preguntas Frecuentes
  //       </a>
  //       <a href="#">Partnerships</a>
  //       <a href="#">Ayuda</a>
  //       <a href="mailto:hi@bonjourana.com">Contactanos</a>
  //     </div>
  //     <div className="locations s-txt">
  //       <p className="b-txt">Locations</p>
  //       <p>San Juan</p>
  //       <p>Carolina</p>
  //       <p>Guaynabo</p>
  //       <p>Canóvanas</p>
  //       <p>Caguas</p>
  //       <p>Bayamón</p>
  //     </div>
  //     <div className="locations s-txt">
  //       <p>Trujillo Alto</p>
  //       <p>Toa Baja</p>
  //       <p>Toa Alta</p>
  //       <p>Dorado</p>
  //       <p>Cataño</p>
  //       <p>Río Grande</p>
  //     </div>
  //   </div>
  // </div>
);

export default FooterTop;
