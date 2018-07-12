import React from 'react';
import Testimonial from './Testimonial';

import picture from '../../../images/jpg/tamara-matos.jpg';
import picture2 from '../../../images/jpg/mayra-candelaria.jpg';

const person = {
  name: 'Tamara Matos',
  quote:
    '"Excelente servicio! Siempre dan la milla extra y mi vida ahora es mucho más fácil gracias a ellos! 100% recomendado!"'
};

const person2 = {
  name: 'Mayra Candelaria',
  quote:
    '"Cuento con el servicio de compras semanales hace varios meses y estoy satisfecha. Son muy receptivos a comentarios hechos y buscan satisfacer al cliente rápidamente."'
};

const TestimonialDesktop = () => (
  <div className="testimonial">
    <Testimonial name={person.name} quote={person.quote} image={picture} />
    <Testimonial name={person2.name} quote={person2.quote} image={picture2} />
    <Testimonial name={person.name} quote={person.quote} image={picture} />
  </div>
);

export default TestimonialDesktop;
