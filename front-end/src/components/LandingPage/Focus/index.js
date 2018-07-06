import React from 'react';

import '../../../styles/components/Focus.css';

import picture from '../../../images/jpg/IMG_0247 2.44.11 PM.JPG';

const Focus = () => (
  <div className="focus">
    <div className="focus__description">
      <h2 className="focus__header">Enfócate en lo que realmente importa.</h2>
      <p className="focus__text">
        Bonjour Ana es tu asistente personal para el hogar y necesidades
        diarias.
      </p>
      <a href="" className="button-y">
        Oferta de Limpieza
      </a>
    </div>

    <div className="focus__img-box">
      <img src={picture} alt="focus" className="focus__img" />
    </div>
  </div>
);

export default Focus;
