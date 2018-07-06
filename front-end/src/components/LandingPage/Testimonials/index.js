import React from 'react';
import { Responsive } from 'semantic-ui-react';
import TestimonialResponsive from './TestimonialResponsive';
import TestimonialDesktop from './TestimonialDesktop';

import '../../../styles/components/Testimonials.css';

const Testimonials = () => (
  <div>
    <Responsive {...Responsive.onlyMobile}>
      <TestimonialResponsive />
    </Responsive>

    <Responsive {...Responsive.onlyTablet}>
      <TestimonialResponsive />
    </Responsive>

    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      <TestimonialDesktop />
    </Responsive>
  </div>
);

export default Testimonials;
