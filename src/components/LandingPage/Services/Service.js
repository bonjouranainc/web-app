import React from 'react';

const Service = ({ image, title }) => (
  <div className="service">
    <img src={image} alt="Offer of service" className="service__img" />
    <p className="service__title">{title}</p>
  </div>
);

export default Service;
