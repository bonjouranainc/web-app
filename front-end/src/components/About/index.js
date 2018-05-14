import React from 'react';
import NavBar from '../NavBar/index';
import Footer from '../Footer/index';
import './styles.css';

const About = () => (
  <div className="about">
    <div className="about__header">
      <NavBar />
    </div>
    <div className="about__quote">
      <p>Some bullshit</p>
    </div>
    <div className="about__footer">
      <Footer />
    </div>
  </div>
);

export default About;
