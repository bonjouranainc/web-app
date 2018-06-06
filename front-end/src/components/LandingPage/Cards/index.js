import React, { Component } from 'react';
import { Card, Grid, Image, Rating } from 'semantic-ui-react';

import picture from '../../../images/jpg/mayra-candelaria.jpg';
import './style.css';

export default class Cards extends Component {
  render() {
    return (
      <div className="card-container">
        <Grid centered>
          <Grid.Column computer={5} tablet={8} mobile={16}>
            <Card centered raised>
              <Image centered src={picture} size="small" rounded />
              <Card.Content>
                <Card.Header>Lily M.</Card.Header>
                <Card.Description>
                  Muy contenta con el servicio. Mi casa quedo inmaculada!
                </Card.Description>
                <Card.Content>
                  <Rating
                    icon="star"
                    defaultRating={5}
                    maxRating={5}
                    disabled
                  />
                </Card.Content>
              </Card.Content>
              <Card.Content extra>Servicios contratados:</Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column computer={5} tablet={8} mobile={16}>
            <Card centered raised>
              <Image centered src={picture} size="small" rounded />
              <Card.Content>
                <Card.Header>Lily M.</Card.Header>
                <Card.Description>
                  Muy contenta con el servicio. Mi casa quedo inmaculada!
                </Card.Description>
                <Card.Content>
                  <Rating
                    icon="star"
                    defaultRating={5}
                    maxRating={5}
                    disabled
                  />
                </Card.Content>
              </Card.Content>
              <Card.Content extra>Servicios contratados:</Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column computer={5} tablet={16} mobile={16}>
            <Card centered raised>
              <Image centered src={picture} size="small" rounded />
              <Card.Content>
                <Card.Header>Lily M.</Card.Header>
                <Card.Description>
                  Muy contenta con el servicio. Mi casa quedo inmaculada!
                </Card.Description>
                <Card.Content>
                  <Rating
                    icon="star"
                    defaultRating={5}
                    maxRating={5}
                    disabled
                  />
                </Card.Content>
              </Card.Content>
              <Card.Content extra>Servicios contratados:</Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
