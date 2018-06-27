import React from 'react';
import { Rating } from 'semantic-ui-react';

const SingleCard = props => (
  <div className="card-container">
    <div className="card-container__card">
      <div className="card-container__img-box">
        <img
          src={props.picture}
          alt="testimonial person"
          className="card-container__img"
        />
      </div>
      <div className="card-container__text">
        <h4 className="card-container__text--name">{props.name}</h4>
        <p className="card-container__text--quote">{props.quote}</p>
      </div>

      <div className="card-container__rating">
        <Rating
          className="card-container__rating--stars"
          icon="star"
          maxRating={5}
          defaultRating={5}
        />
      </div>
    </div>
  </div>
);

export default SingleCard;
