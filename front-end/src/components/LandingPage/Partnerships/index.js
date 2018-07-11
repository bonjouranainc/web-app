import React from 'react';
import { Grid } from 'semantic-ui-react';

import '../../../styles/components/Partnerships.css';

const Partnerships = () => (
  <div className="partnerships">
    <Grid columns={2} divided>
      <Grid.Column className="partnerships__grid">
        <a
          href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar"
          className="button-y"
        >
          ¿Quieres ser un Ana Helper?
        </a>
      </Grid.Column>
      <Grid.Column className="partnerships__grid">
        <a
          href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar"
          className="button-y"
        >
          Coordinar Cita de Bienvenida
        </a>
      </Grid.Column>
    </Grid>
  </div>
);

export default Partnerships;
