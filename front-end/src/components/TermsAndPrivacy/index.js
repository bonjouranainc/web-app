import React from 'react';

import TermsOfUse from './components/TermsOfUse/index.js';
import PrivacyPolicy from './components/PrivacyPolicy/index.js';

import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index.js';

const TermsAndPrivacy = () => (
  <div>
    <NavBar />
    <TermsOfUse />
    <PrivacyPolicy />
    <Footer />
  </div>
);

export default TermsAndPrivacy;
