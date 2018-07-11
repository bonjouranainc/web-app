import React from 'react';
import { Responsive } from 'semantic-ui-react';
import TestimonialResponsive from './TestimonialResponsive';
import TestimonialDesktop from './TestimonialDesktop';

import '../../../styles/components/Testimonials.css';

const Testimonials = () => (
  <div>
    <Responsive minWidth={320} maxWidth={1199}>
      <TestimonialResponsive />
    </Responsive>

    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      <TestimonialDesktop />
    </Responsive>
  </div>
);

export default Testimonials;
