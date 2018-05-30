import React from 'react';
import { Button } from 'semantic-ui-react';

import './styles.css';

const Description = () => (
  <div className="description">
    <div className="desc-box">
      <h2 className="heading-primary">
        <span className="heading-primary__main">
          Enfócate en lo que <br />realmente importa.
        </span>
        <span className="heading-primary-sub">
          Bonjour Ana es tu <br />asistente personal para el hogar y <br />necesidades
          diarias.
        </span>
      </h2>

      <Button className="desc-box-button">
        <a href="">Oferta de Limpieza</a>
      </Button>
    </div>
  </div>
);

export default Description;
