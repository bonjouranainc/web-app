import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './styles.css';

const Service = props => (
  <Card raised>
    <Image className="service__image" src={props.icon} />
    <Card.Content>
      <Card.Meta textAlign="center">{props.services}</Card.Meta>
    </Card.Content>
  </Card>
);

export default Service;
