import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './styles.css';

const Service = props => (
  <Card className="service-card" raised>
    <Image src={props.icon} />
    <Card.Content style={{ backgroundColor: '#f4f4f4' }}>
      <Card.Meta textAlign="center">{props.services}</Card.Meta>
    </Card.Content>
  </Card>
);

export default Service;
