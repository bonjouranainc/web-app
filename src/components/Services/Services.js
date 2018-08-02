import React from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
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
  <div>
    <div className="services-page__services">
      <Link to="/">
        <Service title={'Limpieza'} image={service1} />
      </Link>
      <Link to="/">
        <Service title={'Ventanas'} image={service2} />
      </Link>
      <Link to="/">
        <Service title={'Pintura'} image={service3} />
      </Link>
      <Link to="/">
        <Service title={'Patio'} image={service4} />
      </Link>
      <Link to="/handyman">
        <Service title={'Handyman'} image={service5} />
      </Link>
    </div>

    <div className="services-page__services">
      <Link to="/">
        <Service title={'Electricista'} image={service6} />
      </Link>
      <Link to="/">
        <Service title={'Plomería'} image={service7} />
      </Link>
      <Link to="/">
        <Service title={'Fumigación '} image={service8} />
      </Link>
      <Link to="/">
        <Service title={'A/C'} image={service9} />
      </Link>
    </div>
  </div>
);

export default Services;
