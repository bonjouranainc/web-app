import React from 'react';
import url from '../../images/svg/handshake.svg';

import './styles.css';

const Partnerships = () => (
  <div className="container">
    <div className="container__box">
      <div className="partner-box">
        <div className="partner-box__heading">
          <div className="partner-box__heading--primary">
            <h2>Partnerships</h2>
          </div>
          <div className="partner-box__heading--secundary">
            <p>
              Eres realtor, dueño de propiedades vacacionales y/o desarrollador
              y estas interesado en nuestros servicios?
            </p>
          </div>
          <div className="partner-box__heading--btn">
            <a href="#">Partnerships</a>
          </div>
        </div>
      </div>
      <div className="welcoming-box">
        <div className="welcoming-box__heading">
          <div className="welcoming-box__heading--primary">
            <h2>Citas de Bienvenida</h2>
          </div>
          <div className="welcoming-box__heading--secundary">
            <p>Quieres conocernos antes de ordenar nuestros servicios?</p>
          </div>
          <div className="welcoming-box__heading--btn">
            <a href="#">Coordinar visita</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Partnerships;

{
  /* <div className="partnerships wrapper">
    <div className="col">
      <h1 className="b-txt">Partnerships</h1>
      <h2>
        Eres realtor, dueño de propiedades vacacionales y/o desarrollador y
        estas interesado en nuestros servicios?
      </h2>
    </div>
    <div className="col">
      <img src={url} alt="" />
    </div>
    <div className="col partnershipButton">
      <a href="mailto:hi@bonjourana.com" className="button-b">
        Partnerships
      </a>
    </div>
  </div> */
}