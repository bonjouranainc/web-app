import React from 'react';
import { Responsive } from 'semantic-ui-react';
import CardDesktop from './CardDesktop';
import CardResponsive from './CardResponsive';

import './style.css';

const Cards = () => (
  <div className="card-container">
    <Responsive {...Responsive.onlyMobile}>
      <CardResponsive />
    </Responsive>

    <Responsive {...Responsive.onlyTablet}>
      <CardResponsive />
    </Responsive>

    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      <CardDesktop />
    </Responsive>
  </div>
);

export default Cards;
