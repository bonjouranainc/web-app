import React from 'react';
import { Grid, Button, Image } from 'semantic-ui-react';

import './style.css';

import picture from '../../../images/jpg/IMG_0247.JPG';

const Focus = () => (
  <Grid className="focus">
    <Grid.Column className="focus-column" computer={8} mobile={16}>
      <h3 className="focus-header">Enfócate en lo que realmente importa.</h3>
      <p className="focus-text">
        Bonjour Ana es tu asistente personal para el hogar y necesidades
        diarias.
      </p>
      <Button className="focus-btn">
        <a href="">Oferta de Limpieza</a>
      </Button>
    </Grid.Column>

    <Grid.Column computer={8} mobile={16}>
      <Image src={picture} fluid alt="chilling" />
    </Grid.Column>
  </Grid>
);

export default Focus;
