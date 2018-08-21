import React from 'react';
import { Responsive } from 'semantic-ui-react';
import TestimonialResponsive from './TestimonialResponsive';
import TestimonialDesktop from './TestimonialDesktop';

const Testimonials = () => (
  <div>
    <Responsive minWidth={320} maxWidth={1199}>
      <TestimonialResponsive />
    </Responsive>

    <Responsive minWidth={1200}>
      <TestimonialDesktop />
    </Responsive>
  </div>
);

export default Testimonials;
