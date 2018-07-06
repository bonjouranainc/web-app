import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

import '../../../styles/components/Partnerships.css';

const Partnerships = () => (
  <div className="partnerships">
    <Grid columns={2} divided>
      <Grid.Column className="partnerships__grid">
        <Button className="button-y">¿Quieres ser un Ana Helper?</Button>
      </Grid.Column>
      <Grid.Column className="partnerships__grid">
        <Button className="button-y">Coordinar Cita de Bienvenida</Button>
      </Grid.Column>
    </Grid>
  </div>
);

export default Partnerships;
