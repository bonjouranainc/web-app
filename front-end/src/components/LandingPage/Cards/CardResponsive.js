import React, { Component } from 'react';
import SingleCard from './SingleCard';
import { Carousel } from 'react-bootstrap';

import picture from '../../../images/jpg/mayra-candelaria.jpg';

const person = {
  name: 'Lily M.',
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
            picture={picture}
            name={person.name}
            quote={person.quote}
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
