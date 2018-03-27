import React from 'react';
import url from '../../images/svg/handshake.svg';

import './styles.css';

const Partnerships = () => (
  <div className="partnerships wrapper">
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
  </div>
);

export default Partnerships;
