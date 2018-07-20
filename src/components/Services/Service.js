import React from 'react';

const Service = ({ title, image }) => (
  <div className="services-page__card">
    <img src={image} alt="service" className="services-page__img" />
    <p className="services-page__job">{title}</p>
  </div>
);

export default Service;
