import React from 'react';

import Header from './Header/index';
import Focus from './Focus/index';
import HowItWorks from './HowItWorks/index.js';
import Services from './Services/index';
import Cards from './Cards/index';
import Partnerships from './Partnerships/index.js';

const LandingPage = () => (
  <div>
    <Header />
    <HowItWorks />
    <Focus />
    <Services />
    <Cards />
    <Partnerships />
  </div>
);

export default LandingPage;
