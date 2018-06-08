import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';

import './style.css';

const style = {
  backgroundColor: 'white',
  textAlign: 'left'
};

const Focus = () => (
  <div className="focus">
    <Grid>
      <Grid.Column textAlign="left" computer={8}>
        <Container text style={style}>
          <h2>Enfócate en lo que realmente importa.</h2>
          <p>
            Bonjour Ana es tu asistente personal para el hogar y necesidades
            diarias.
          </p>
          <Button>
            <a href="">Oferta de Limpieza</a>
          </Button>
        </Container>
      </Grid.Column>
      <Grid.Column className="focus__image" computer={8} />
    </Grid>
  </div>
);

export default Focus;
