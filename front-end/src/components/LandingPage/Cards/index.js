import React, { Component } from 'react';
import { Card, Grid, Image, Icon } from 'semantic-ui-react';

import picture from '../../../images/jpg/mayra-candelaria.jpg';

export default class Cards extends Component {
  render() {
    return (
      <Card centered>
        <Image centered src={picture} size="small" />
        <Card.Content>
          <Card.Header>Lily M.</Card.Header>
          <Card.Description>
            Muy contenta con el servicio. Mi casa quedo inmaculada!
          </Card.Description>
        </Card.Content>
        <Card.Content extra>blahh</Card.Content>
      </Card>
    );
  }
}
