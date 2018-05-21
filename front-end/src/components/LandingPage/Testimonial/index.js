import React from 'react';
import Card from './Card';
import picture from '../../../images/jpg/tamara-matos.jpg';

import './index.css';

const person = {
  name: 'Lily M.',
  quote: 'Muy contenta con el servicio.\n Mi casa quedo inmaculada!'
};

const Testimonial = () => (
  <section className="testimonial">
    <div className="card">
      <Card picture={picture} name={person.name} quote={person.quote} />
    </div>
    <div className="card">
      <Card picture={picture} name={person.name} quote={person.quote} />
    </div>
    <div className="card">
      <Card picture={picture} name={person.name} quote={person.quote} />
    </div>
  </section>
);

export default Testimonial;
