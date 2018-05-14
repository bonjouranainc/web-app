import React from 'react';
import url from '../../images/svg/handshake.svg';

import './index.css';

const Partnerships = () => (
  <div className="container">
    <div className="partnerbox">
      <div className="partnerbox__text">
        <div className="partnerbox__text__heading">
          <h3>Partnerships</h3>
        </div>
        <div className="partnerbox__text__subheading">
          <p>
            ¿Eres realtor, dueño de propiedades vacacionales y/o desarrollador y
            estas interesado en nuestros servicios?
          </p>
        </div>
        <div className="partnerbox__text__btn">
          <a href="#" className="button-y">
            Partnerships
          </a>
        </div>
        <div className="partnerbox__text__img">
          <img src={url} alt="handshake" />
        </div>
      </div>
    </div>
    <div className="welcomingbox">
      <div className="welcomingbox__text">
        <div className="welcomingbox__text__heading">
          <h3>Citas de Bienvenida</h3>
        </div>
        <div className="welcomingbox__text__subheading">
          <p>¿Quieres conocernos antes de ordenar nuestros servicios?</p>
        </div>
        <div className="welcomingbox__text__btn">
          <a href="#" className="button-y">
            Coordinar Visitas
          </a>
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
