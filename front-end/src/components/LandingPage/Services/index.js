import React from 'react';
import { Card, Grid, Button, Image } from 'semantic-ui-react';

import icon1 from '../../../images/png/HandyMan.png';
import icon2 from '../../../images/png/Terraza.png';
import icon3 from '../../../images/png/Ventanas.png';
import icon4 from '../../../images/png/Marquesina.png';
import icon5 from '../../../images/png/Electrisista.png';
import icon6 from '../../../images/png/Laundry en el Hogar.png';
import icon7 from '../../../images/png/Plomeria.png';
import icon8 from '../../../images/png/Recogido.png';
import icon9 from '../../../images/png/Pintura.png';

import './styles.css';

const Services = () => (
  <div className="service">
    <h2>Otros Servicios</h2>
    <Grid className="service-grid" centered>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon1} />
          <Card.Content>
            <Card.Meta>HandyMan</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon2} />
          <Card.Content>
            <Card.Meta>Terraza</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon3} />
          <Card.Content>
            <Card.Meta>Ventanas</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon4} />
          <Card.Content>
            <Card.Meta>Marquesina</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon5} />
          <Card.Content>
            <Card.Meta>Electrisista</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon6} />
          <Card.Content>
            <Card.Meta>Laundry en el hogar</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon7} />
          <Card.Content>
            <Card.Meta>Plomeria</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon8} />
          <Card.Content>
            <Card.Meta>Recogido</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={5} tablet={5} computer={2}>
        <Card raised>
          <Image src={icon9} />
          <Card.Content>
            <Card.Meta>Pintura</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>

    <div className="service-button">
      <Button className="service-btn">Ver mas</Button>
    </div>
  </div>
);

export default Services;
