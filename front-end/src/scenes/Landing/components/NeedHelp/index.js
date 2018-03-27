import React from 'react';
import url from '../../images/svg/ba-boy-cut.svg';

import './styles.css';

const NeedHelp = () => (
  <div className="needHelp wrapper">
    <div className="col">
      <h1>¿Necesitas Ayuda?</h1>
      <h1 className="b-txt">¡Te resolvemos!</h1>
    </div>
    <div className="btn-group">
      <a href="/" className="button-y-o">
        Handyman
      </a>
      <a href="/" className="button-y-o">
        Plomero
      </a>
      <a href="/" className="button-y-o">
        Electricista
      </a>
      <a href="/" className="button-y-o">
        Compra de alimentos
      </a>
      <a href="/" className="button-y-o">
        Laundry en el hogar
      </a>
      <a href="/" className="button-y-o">
        Recogido del hogar
      </a>
      <a href="/" className="button-y-o">
        Limpieza de ventanas
      </a>
    </div>
    <div className="ba-boy">
      <img src={url} alt="" />
    </div>
  </div>
);

export default NeedHelp;
