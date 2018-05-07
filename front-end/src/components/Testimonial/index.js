import React from 'react';
import picture from '../../images/jpg/tamara-matos.jpg';

import './index.css';

const person = {
  name: 'Lily M.',
  quote: 'Muy contenta con el servicio.\n Mi casa quedo inmaculada!'
};

const arrayOfStars = [
  'fas fa-star',
  'fas fa-star',
  'fas fa-star',
  'fas fa-star',
  'fas fa-star'
];

const Testimonial = () => (
  <section className="testimonial">
    <div className="row">
      <div className="card">
        <div className="card--img">
          <img src={picture} alt="lady" />
        </div>
        <div className="card--text">
          <h5>{person.name}</h5>
          <p>{person.quote}</p>
          <div className="card--stars">
            {arrayOfStars.map(star => <i className={star} />)}
          </div>
          <p>Servicios contratados:</p>
          <p>Some icons go here</p>
        </div>
      </div>
      <div className="card">
        <div className="card--img">
          <img src={picture} alt="lady" />
        </div>
        <div className="card--text">
          <h5>{person.name}</h5>
          <p>{person.quote}</p>
          <div className="card--stars">
            {arrayOfStars.map(star => <i className={star} />)}
          </div>
          <p>Servicios contratados:</p>
          <p>Some icons go here</p>
        </div>
      </div>
      <div className="card">
        <div className="card--img">
          <img src={picture} alt="lady" />
        </div>
        <div className="card--text">
          <h5>{person.name}</h5>
          <p>{person.quote}</p>
          <div className="card--stars">
            {arrayOfStars.map(star => <i className={star} />)}
          </div>
          <p>Servicios contratados:</p>
          <p>Some icons go here</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;

{
  /* {stars.map(starImage => {
              return <img src={starImage} alt="foo" />;
            })} */
}
