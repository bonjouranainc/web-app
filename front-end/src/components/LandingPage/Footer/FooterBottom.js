import React from 'react';

import './styles.css';

const year = new Date();

const FooterBottom = () => (
  <div className="footerBottom">
    <a href="/terms">Terms & Privacy</a>
    <p>&copy;{year.getFullYear()} Bonjour Ana Inc.</p>
  </div>
);

export default FooterBottom;
