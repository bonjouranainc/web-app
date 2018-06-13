import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

const SingleCard = props => (
  <Card centered raised>
    <Image centered src={props.picture} size="small" rounded />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>{props.quote}</Card.Description>
      <Card.Content>
        <Rating icon="star" defaultRating={5} maxRating={5} disabled />
      </Card.Content>
    </Card.Content>
    <Card.Content extra>Servicios contratados:</Card.Content>
  </Card>
);

export default SingleCard;
