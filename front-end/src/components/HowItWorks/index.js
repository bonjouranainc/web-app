import React from 'react';
import NavBar from '../LandingPage/NavBar';
import Process from './Process/index';
import FAQ from './FAQ/index';
import Footer from '../LandingPage/Footer';

import './style.css';

const colorNav = {
  backgroundColor: 'yellow'
};

const WorkPage = () => (
  <div>
    <NavBar />
    <Process />
    <FAQ />
    <Footer />
  </div>
);

export default WorkPage;
