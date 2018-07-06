import React from 'react';
import { Button } from 'semantic-ui-react';

import '../../../styles/components/Focus.css';

import picture from '../../../images/jpg/IMG_0247 2.44.11 PM.JPG';

const Focus = () => (
  <div className=".focus">
    <div className="focus-row">
      <div className="focus-column">
        <h2 className="header-subtitle">
          Enfócate en lo que realmente importa.
        </h2>
        <p className="paragraph">
          Bonjour Ana es tu asistente personal para el hogar y necesidades
          diarias.
        </p>
        <Button className="button-y">Oferta de limpieza</Button>
      </div>

      <div className="focus-image">
        <img src={picture} alt="chilling" />
      </div>
    </div>
  </div>
);

export default Focus;
