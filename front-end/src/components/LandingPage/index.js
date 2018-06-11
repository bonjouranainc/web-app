import React from 'react';

import NavBar from './NavBar/index';
import Header from './Header/index';
import Focus from './Focus/index';
import HowItWorks from './HowItWorks/index.js';
import Cards from './Cards';
import Partnerships from './Partnerships/index.js';
import Footer from './Footer/index';

const LandingPage = () => (
  <div>
    <NavBar />
    <Header />
    <HowItWorks />
    <Focus />
    <Cards />
    <Partnerships />
    <Footer />
  </div>
);

export default LandingPage;
