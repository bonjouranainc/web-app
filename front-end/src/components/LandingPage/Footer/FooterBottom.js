import React from 'react';

const year = new Date();

const FooterBottom = () => (
  <div className="footer-bottom">
    <a className="link-text" href="/terms">
      Terms & Privacy
    </a>
    <p>&copy;{year.getFullYear()} Bonjour Ana Inc.</p>
  </div>
);

export default FooterBottom;
