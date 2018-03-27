import React from 'react';

import './styles.css';

const Welcome = () => (
  <div className="l-welcome wrapper">
    <div className="main">
      <div className="header-txt">
        <h1>
          Completamos <br />
          tus <span className="b-txt">tareas del hogar</span> <br />
          y <span className="b-txt">necesidades diarias</span>
        </h1>
      </div>
      <div className="welcome-btns">
        <a
          href="https://bonjour-ana.myshopify.com/products/servicio-de-limpieza"
          className="button-y"
        >
          Coordinar Servicios
        </a>
      </div>
    </div>
  </div>
);

export default Welcome;
