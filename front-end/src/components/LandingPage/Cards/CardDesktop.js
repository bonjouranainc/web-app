import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SingleCard from './SingleCard';

import picture from '../../../images/jpg/mayra-candelaria.jpg';

const person = {
  name: 'Lily M.',
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
            picture={picture}
            name={person.name}
            quote={person.quote}
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
