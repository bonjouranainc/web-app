import React from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../images/svg/facebook-icon.svg';
import twitter from '../../images/svg/twitter-icon.svg';
import instagram from '../../images/svg/instagram-icon.svg';

const FooterTop = () => (
  <div className="footer-top">
    <div className="footer-top__social">
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

    <div className="footer-top__links">
      <ul>
        <li>
          <Link className="link-text" to="/about">
            Sobre BA
          </Link>
        </li>
        <li>
          <Link className="link-text" to="/how">
            Preguntas Frecuentes
          </Link>
        </li>
        <li>
          <a className="link-text" href="mailto:hi@bonjourana.com">
            Partnerships
          </a>
        </li>
        <li>
          <a className="link-text" href="mailto:hi@bonjourana.com">
            Contáctanos
          </a>
        </li>
        <li>Tel: 787-523-5870</li>
        <li className="link-text--admin">
          <strong>Horario Administrativo</strong>:<br />&nbsp; Lunes a Viernes
          10:00am - 6:00pm
        </li>
        <li className="link-text--admin">
          <strong>Horario de Servicio</strong>:<br />&nbsp; Lunes a Domingo
          7:30am en adelante
        </li>
      </ul>
    </div>

    <div className="footer-top__locations">
      <p className="paragraph">
        <strong>Pueblos</strong>
      </p>
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

    <div className="footer-top__services">
      <p className="paragraph">
        <strong>Servicios</strong>
      </p>
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
);

export default FooterTop;
