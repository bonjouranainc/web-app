import React from 'react';

import './styles.css';

const Description = () => (
  <div className="description">
    <div className="desc-box">
      <h2 className="heading-primary">
        <span className="heading-primary-main">
          Enfócate en lo que <br />realmente importa.
        </span>
        <span className="heading-primary-sub">
          Bonjour Ana es tu <br />asistente personal para el hogar y <br />necesidades
          diarias.
        </span>
      </h2>

      <div className="btn-desc">
        <a href="#" className="button-y">
          Oferta de Limpieza
        </a>
      </div>
    </div>

    {/* <div className="col">
      <a
        href="https://bonjour-ana.myshopify.com/products/especial-de-limpieza"
        className="button-y"
      >
        Oferta de limpieza
      </a>
    </div> */}
  </div>
);

export default Description;
