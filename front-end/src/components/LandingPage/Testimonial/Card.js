import React from 'react';
import './Card.css';

const arrayOfStars = [
  'fas fa-star',
  'fas fa-star',
  'fas fa-star',
  'fas fa-star',
  'fas fa-star'
];

const Card = props => (
  <div>
    <div className="card--img">
      <img src={props.picture} alt="lady" />
    </div>
    <div className="card--text">
      <h5>{props.name}</h5>
      <p>{props.quote}</p>
      <div className="card--stars">
        {arrayOfStars.map(star => <i className={star} />)}
      </div>
      <p>Servicios contratados:</p>
      <p>Some icons go here</p>
    </div>
  </div>
);

export default Card;
