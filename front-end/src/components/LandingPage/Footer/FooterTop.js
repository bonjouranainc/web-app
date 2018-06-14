import React from 'react';
import { Grid } from 'semantic-ui-react';

import facebook from '../../../images/svg/facebook-icon.svg';
import twitter from '../../../images/svg/twitter-icon.svg';
import instagram from '../../../images/svg/instagram-icon.svg';

import './styles.css';

const FooterTop = () => (
  <div className="footer-top">
    <Grid className="footer-top__grid">
      <Grid.Column>
        <div className="footer-top__social">
          <a href="">
            <img src={facebook} alt="facebook logo" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter logo" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram logo" />
          </a>
        </div>
      </Grid.Column>

      <Grid.Column floated="right">
        <div className="footer-top__links">
          <ul>
            <li>
              <a href="">Sobre BA</a>
            </li>
            <li>
              <a href="">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="">Partnerships</a>
            </li>
            <li>
              <a href="">Ayuda</a>
            </li>
            <li>
              <a href="">Contactanos</a>
            </li>
          </ul>
        </div>
      </Grid.Column>

      <Grid.Column floated="right">
        <div className="footer-top__pueblos">
          <p>Pueblos</p>
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
      </Grid.Column>

      <Grid.Column floated="right">
        <div className="footer-top__services">
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
      </Grid.Column>
    </Grid>
  </div>
);

export default FooterTop;

//<div className="footer-top">
//   <div className="social-container">
//     <a
//       href="http://facebook.com/bonjouranainc"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <img src={facebook} alt="" />
//     </a>

//     <a
//       href="http://twitter.com/bonjouranainc"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <img src={twitter} alt="" />
//     </a>

//     <a
//       href="http://instagram.com/bonjouranainc"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <img src={instagram} alt="" />
//     </a>
//   </div>

//   <div className="links-container">
//     <ul>
//       <li>
//         <a href="#">Sobre BA</a>
//       </li>
//       <li>
//         <a href="#">Preguntas Frecuentes</a>
//       </li>
//       <li>
//         <a href="#">Partnerships</a>
//       </li>
//       <li>
//         <a href="#">Ayuda</a>
//       </li>
//       <li>
//         <a href="#">Contactanos</a>
//       </li>
//     </ul>
//   </div>

//   <div className="locations-container">
//     <p className="b-txt">Pueblos</p>
//     <ul>
//       <li>San Juan</li>
//       <li>Carolina</li>
//       <li>Guaynabo</li>
//       <li>Canovanas</li>
//       <li>Caguas</li>
//       <li>Bayamon</li>
//       <li>Trujillo Alto</li>
//       <li>Toa Baja</li>
//       <li>Toa Alta</li>
//       <li>Dorado</li>
//       <li>Cataño</li>
//       <li>Rio Grande</li>
//     </ul>
//   </div>

//   <div className="services-container">
//     <p className="b-txt">Servicios</p>
//     <ul>
//       <li>Limpieza</li>
//       <li>Laundry</li>
//       <li>Limpieza de Ventanas</li>
//       <li>Patio</li>
//       <li>Aires Acondicionados</li>
//       <li>Pintura</li>
//       <li>Plomeria</li>
//       <li>Handyman</li>
//       <li>Zapatero</li>
//       <li>Recogido del hogar</li>
//     </ul>
//   </div>
// </div>
