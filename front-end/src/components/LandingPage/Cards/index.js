import React from 'react';
import { Responsive } from 'semantic-ui-react';
import CardDesktop from './CardDesktop';
import CardResponsive from './CardResponsive';

import './style.css';

const Cards = () => (
  <section className="card">
    <Responsive {...Responsive.onlyMobile}>
      <CardResponsive />
    </Responsive>

    <Responsive {...Responsive.onlyTablet}>
      <CardResponsive />
    </Responsive>

    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      <CardDesktop />
    </Responsive>
  </section>
);

export default Cards;
