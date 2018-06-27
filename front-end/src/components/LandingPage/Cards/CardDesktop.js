import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SingleCard from './SingleCard';

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

export default class CardDesktop extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Column computer={5}>
          <SingleCard
            picture={picture}
            name={person.name}
            quote={person.quote}
          />
        </Grid.Column>

        <Grid.Column computer={5}>
          <SingleCard
            picture={picture2}
            name={person2.name}
            quote={person2.quote}
          />
        </Grid.Column>

        <Grid.Column computer={5}>
          <SingleCard
            picture={picture}
            name={person.name}
            quote={person.quote}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
