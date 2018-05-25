import React from 'react';

import TermsOfUse from './TermsOfUse/index';
import PrivacyPolicy from './PrivacyPolicy/index';

import NavBar from '../LandingPage/NavBar/index';
import Footer from '../LandingPage/Footer/index';

const TermsAndPrivacy = () => (
  <div>
    <NavBar />
    <TermsOfUse />
    <PrivacyPolicy />
    <Footer />
  </div>
);

export default TermsAndPrivacy;
