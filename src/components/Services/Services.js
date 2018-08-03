import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import service1 from '../../images/png/Limpieza-01.png';
import service2 from '../../images/png/Ventanas.png';
import service3 from '../../images/png/Pintura.png';
import service4 from '../../images/png/Patio-01.png';
import service5 from '../../images/png/HandyMan.png';
import service6 from '../../images/png/Electrisista.png';
import service7 from '../../images/png/Plomeria.png';
import service8 from '../../images/png/Fumigacion-01.png';
import service9 from '../../images/png/Aire Acondicionado-01.png';

const Services = () => (
  <div className="services-page__services-box">
    <Link to="/">
      <ServiceCard title={'Limpieza'} image={service1} />
    </Link>
    <Link to="/ventanas">
      <ServiceCard title={'Ventanas'} image={service2} />
    </Link>
    <Link to="/pintura">
      <ServiceCard title={'Pintura'} image={service3} />
    </Link>
    <Link to="/patio">
      <ServiceCard title={'Patio'} image={service4} />
    </Link>
    <Link to="/handyman">
      <ServiceCard title={'Handyman'} image={service5} />
    </Link>
    <Link to="/electricista">
      <ServiceCard title={'Electricista'} image={service6} />
    </Link>
    <Link to="/plomeria">
      <ServiceCard title={'Plomería'} image={service7} />
    </Link>
    <Link to="/fumigacion">
      <ServiceCard title={'Fumigación '} image={service8} />
    </Link>
    <Link to="/ac">
      <ServiceCard title={'A/C'} image={service9} />
    </Link>
  </div>
);

export default Services;
