import React from 'react';

import NavBar from './NavBar/index';
import Header from './Header/index';
import Description from './Description/index.js';
import HowItWorks from './HowItWorks/index.js';
import Testimonials from './Testimonials/index';
import Partnerships from './Partnerships/index.js';
import NeedHelp from './NeedHelp/index.js';
import Footer from './Footer/index';

const LandingPage = () => (
  <div>
    <NavBar />
    <Header />
    <HowItWorks />
    <Description />
    <Testimonials />
    <NeedHelp />
    <Partnerships />
    <Footer />
  </div>
);

export default LandingPage;
