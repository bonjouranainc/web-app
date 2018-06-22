import React from 'react';

const AboutGrid = props => (
  <div className="about__photo-grid--img">
    <img src={props.picture} alt="ana helper" />
    <div className="about__photo-grid--desc">
      <h4>{props.name}</h4>
      <p>{props.profession}</p>
    </div>
  </div>
);

export default AboutGrid;
