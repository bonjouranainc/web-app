import React from 'react';
import picture from '../../images/jpg/tamara-matos.jpg';

import './index.css';

const person1 = {
  name: 'Lily M.',
  quote: 'Muy contenta con el servicio.\n Mi casa quedo inmaculada!'
};

const Testimonial = () => (
  <section className="testimonial">
    <div className="row">
      <div className="card">
        <div className="card--img">
          <img src={picture} alt="Picture of lady" />
        </div>
        <div className="card--text">
          <h5>{person1.name}</h5>
          <p>{person1.quote}</p>
          <div className="card--stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>Servicios contratados:</p>
          <p>Some icons go here</p>
        </div>
      </div>
      <div className="card">
        <div className="card--img">
          <img src={picture} alt="Picture of lady" />
        </div>
        <div className="card--text">
          <h5>{person1.name}</h5>
          <p>{person1.quote}</p>
          <div className="card--stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>Servicios contratados:</p>
          <p>Some icons go here</p>
        </div>
      </div>
      <div className="card">
        <div className="card--img">
          <img src={picture} alt="Picture of lady" />
        </div>
        <div className="card--text">
          <h5>{person1.name}</h5>
          <p>{person1.quote}</p>
          <div className="card--stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
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
