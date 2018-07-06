import React from 'react';
import Service from './Service';
import service1 from '../../../images/png/HandyMan.png';
import service2 from '../../../images/png/Terraza.png';
import service3 from '../../../images/png/Ventanas.png';
import service4 from '../../../images/png/Marquesina.png';
import service5 from '../../../images/png/Electrisista.png';
import service6 from '../../../images/png/Laundry.png';
import service7 from '../../../images/png/Plomeria.png';
import service8 from '../../../images/png/Pintura.png';

import '../../../styles/components/Services.css';

const Services = () => (
  <div className="services">
    <h2 className="services__header">Otros Servicios</h2>

    <div className="services__grid">
      <Service image={service1} title="Handyman" />
      <Service image={service2} title="Terraza" />
      <Service image={service3} title="Ventanas" />
      <Service image={service4} title="Marquesina" />
      <Service image={service5} title="Electricista" />
      <Service image={service6} title="Laundry" />
      <Service image={service7} title="Plomería" />
      <Service image={service8} title="Pintura" />
    </div>
  </div>
);

export default Services;
