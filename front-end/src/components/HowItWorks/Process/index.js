import React from 'react';
import logo from '../../../images/png/BA_Blanco-01.png';

const Process = () => (
  <nav className="navbar is-warning">
    <div className="navbar-brand">
      <a href="/" className="navbar-item">
        <figure className="image is-16x16">
          <img src={logo} alt="shit" />
        </figure>
      </a>
      <a
        className="navbar-hamburger"
        role="button"
        arial-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  </nav>
);

export default Process;
