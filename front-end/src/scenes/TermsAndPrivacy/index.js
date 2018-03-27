import React from 'react';

import TermsOfUse from './components/TermsOfUse/index.js';
import PrivacyPolicy from './components/PrivacyPolicy/index.js';

import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index.js';

const TermsAndPrivacy = () => (
  <div>
    <Header />
    <TermsOfUse />
    <PrivacyPolicy />
    <Footer />
  </div>
);

export default TermsAndPrivacy;
