import React from 'react';
import Service from './Service';
import { Grid, Button } from 'semantic-ui-react';

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

const services = {
  handyMan: 'Handyman',
  terraza: 'Terraza',
  ventanas: 'Ventanas',
  marquesina: 'Marquesina',
  electricista: 'Electricista',
  laundry: 'Laundry',
  plomeria: 'Plomería',
  recogido: 'Recogido',
  pintura: 'Pintura'
};

const Services = () => (
  <div className="service">
    <h2 className="header-subtitle">Otros Servicios</h2>
    <Grid className="service-grid" centered>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon1} services={services.handyMan} />
      </Grid.Column>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon2} services={services.terraza} />
      </Grid.Column>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon3} services={services.ventanas} />
      </Grid.Column>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon4} services={services.marquesina} />
      </Grid.Column>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon5} services={services.electricista} />
      </Grid.Column>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon6} services={services.laundry} />
      </Grid.Column>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon7} services={services.plomeria} />
      </Grid.Column>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon8} services={services.recogido} />
      </Grid.Column>
      <Grid.Column mobile={8} tablet={5} computer={2}>
        <Service icon={icon9} services={services.pintura} />
      </Grid.Column>
    </Grid>

    <div className="service-button">
      <Button className="button-y">Ver mas</Button>
    </div>
  </div>
);

export default Services;
