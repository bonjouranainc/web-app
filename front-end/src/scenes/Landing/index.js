import React from 'react';

import Header from '../../components/Header/index.js';
import Welcome from './components/Welcome/index.js';
import About from './components/About/index.js';
import Description from './components/Description/index.js';
import HowItWorks from './components/HowItWorks/index.js';
import Testimonials from './components/Testimonials/index.js';
import Partnerships from './components/Partnerships/index.js';
import NeedHelp from './components/NeedHelp/index.js';
import Footer from '../../components/Footer/index.js';

const Landing = () => (
  <div>
    <Header />
    <Welcome />
    <HowItWorks />
    {/* <About /> */}
    <Description />
    <Testimonials />
    <NeedHelp />
    <Partnerships />
    <Footer />
  </div>
);

export default Landing;
