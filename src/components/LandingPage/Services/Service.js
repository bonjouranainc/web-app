import React from 'react';

const Service = ({ image, title }) => (
  <div className="services__card">
    <img src={image} alt="Offer of service" className="services__img" />
    <p className="services__title">{title}</p>
  </div>
);

export default Service;
