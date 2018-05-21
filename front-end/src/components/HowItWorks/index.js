import React from 'react';
import NavBar from '../LandingPage/NavBar';
import Process from './Process/index';
import Footer from '../LandingPage/Footer';

const style = {
  backgroundColor: 'yellow'
};

const WorkPage = () => (
  <div>
    <NavBar />
    <Process />
    <Footer />
  </div>
);

export default WorkPage;
