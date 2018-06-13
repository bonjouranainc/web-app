import React from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';

import icon1 from '../../../images/png/HandyMan.png';
import icon2 from '../../../images/png/Terraza.png';
import icon3 from '../../../images/png/Ventanas.png';
import icon4 from '../../../images/png/Marquesina.png';
import icon5 from '../../../images/png/Electrisista.png';
import icon6 from '../../../images/png/Laundry en el Hogar.png';
import icon7 from '../../../images/png/Plomeria.png';
import icon8 from '../../../images/png/Recogido.png';
import icon9 from '../../../images/png/Pintura.png';

const Services = () => (
  <div style={{ backgroundColor: '#f4f4f4' }}>
    <Grid>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon1} />
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon2} />
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon3} />
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon4} />
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon5} />
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon6} />
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon7} />
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon8} />
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={1}>
        <Card raised image={icon9} />
      </Grid.Column>
    </Grid>

    <Button>Ver mas</Button>
  </div>
);

export default Services;
