import React from 'react';

const Testimonial = ({ name, quote, image }) => (
  <div className="testimonial__card">
    <img src={image} alt="first person" className="testimonial__img" />
    <h4 className="testimonial__name">{name}</h4>
    <p className="testimonial__quote">{quote}</p>
    <div className="testimonial__stars">
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
      <span className="fa fa-star checked" />
    </div>
  </div>
);

export default Testimonial;
