import React from 'react';

import NavBar from './NavBar/index';
import Header from './Header/index';
import Description from './Description/index.js';
import HowItWorks from './HowItWorks/index.js';
import Testimonial from './Testimonial/index';
import Partnerships from './Partnerships/index.js';
import Footer from './Footer/index';

// Navbar items for responsivness
const leftItems = [
  { as: 'a', content: 'Servicios', key: 'servicios' },
  { as: 'a', content: 'Nosotros', key: 'nosotros' },
  { as: 'a', content: '¿Cómo funciona?', key: 'comoFunciona' }
];

const rightItems = [
  { as: 'a', content: 'Login', key: 'login' },
  { as: 'a', content: 'Sign Up', key: 'signup' }
];

const LandingPage = () => (
  <div>
    <NavBar leftItems={leftItems} rightItems={rightItems} />
    <Header />
    <HowItWorks />
    <Description />
    <Testimonial />
    <Partnerships />
    <Footer />
  </div>
);

export default LandingPage;
