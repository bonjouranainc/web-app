import React, { Component } from 'react';
import SingleCard from './SingleCard';
import { Carousel } from 'react-bootstrap';

import picture from '../../../images/jpg/tamara-matos.jpg';
import picture2 from '../../../images/jpg/mayra-candelaria.jpg';

const person = {
  name: 'Lily M.',
  quote:
    'Excelente servicio! Siempre dan la milla extra y mi vida ahora es mucho más fácil gracias a ellos! 100% recomendado!'
};

const person2 = {
  name: 'Mayra Candelaria',
  quote: 'Muy contenta con el servicio. Mi casa quedo inmaculada!'
};

export default class CardResponsive extends Component {
  render() {
    return (
      <Carousel style={{ backgroundColor: '#f5f4ed' }}>
        <Carousel.Item>
          <SingleCard
            picture={picture}
            name={person.name}
            quote={person.quote}
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleCard
            picture={picture2}
            name={person2.name}
            quote={person2.quote}
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleCard
            picture={picture}
            name={person.name}
            quote={person.quote}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
