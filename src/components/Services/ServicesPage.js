import React from 'react';
import Header from './Header';
import Services from './Services';
import ServiceText from './ServiceText';

import '../../styles/components/ServicesPage.css';

const ServicesPage = () => (
  <div className="services-page">
    <Header />
    <div className="services-page__container">
      <Services />
      <ServiceText />
    </div>
  </div>
);

export default ServicesPage;
