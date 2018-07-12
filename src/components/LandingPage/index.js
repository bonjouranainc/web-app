import React from 'react';

import Header from './Header/index';
import Focus from './Focus/index';
import HowItWorks from './HowItWorks/index';
import Services from './Services/index';
import Testimonials from './Testimonials/index';
import Partnerships from './Partnerships/index';

const LandingPage = () => (
  <div>
    <Header />
    <HowItWorks />
    <Focus />
    <Services />
    <Testimonials />
    <Partnerships />
  </div>
);

export default LandingPage;
