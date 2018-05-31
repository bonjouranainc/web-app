import React from 'react';
import { Rating } from 'semantic-ui-react';

import './Card.css';

const Card = props => (
  <div>
    <div className="card--img">
      <img src={props.picture} alt="lady" />
    </div>
    <div className="card--text">
      <h5>{props.name}</h5>
      <p>{props.quote}</p>
      <div className="card--stars">
        <Rating icon="star" defaultRating={5} maxRating={5} disabled />
      </div>
      <p>Servicios contratados:</p>
      <p>Some icons go here</p>
    </div>
  </div>
);

export default Card;
