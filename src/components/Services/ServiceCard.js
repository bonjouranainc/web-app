import React from 'react';

const ServiceCard = ({ title, image }) => (
  <div className="services-page__service">
    <img src={image} alt="service" className="services-page__img" />
    <p className="services-page__name">{title}</p>
  </div>
);

export default ServiceCard;
