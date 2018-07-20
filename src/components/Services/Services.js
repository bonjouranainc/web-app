import React from 'react';
import Service from './Service';
import service1 from '../../images/png/HandyMan.png';
import service2 from '../../images/png/Plomeria.png';
import service3 from '../../images/png/Electrisista.png';

const Services = () => (
  <div className="services-page__grid">
    <Service title={'Handyman'} image={service1} />
    <Service title={'Plomería'} image={service2} />
    <Service title={'Electricista'} image={service3} />
  </div>
);

export default Services;
