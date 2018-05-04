import React from 'react';

import './styles.css';

const year = new Date();

const FooterBottom = () => (
  <div className="footerBottom">
    <a href="/terms" className="s-txt">
      Terms & Privacy
    </a>
    <p className="s-txt">&copy;{year.getFullYear()} Bonjour Ana Inc.</p>
  </div>
);

export default FooterBottom;
