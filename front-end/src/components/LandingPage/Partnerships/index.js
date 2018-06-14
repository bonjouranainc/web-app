import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

import './styles.css';

const Partnerships = () => (
  <div className="partnerships">
    <Grid columns={2} divided>
      <Grid.Column className="partnerships-grid">
        <Button className="button-y">Quieres ser un Ana Helper</Button>
      </Grid.Column>
      <Grid.Column className="partnerships-grid">
        <Button className="button-y">Coordina Una Cita de Bienvenida</Button>
      </Grid.Column>
    </Grid>
  </div>
);

export default Partnerships;
