import React from 'react';
import '../../styles/components/Service.css';

const Service = ({ title, image }) => (
  <div className="service">
    <img src={image} alt="service" className="service__img" />
    <p className="services__title">{title}</p>
  </div>
);

export default Service;
