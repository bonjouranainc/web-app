import React from 'react';

import './styles.css';

const Welcome = () => (
  <div className="l-welcome wrapper">
    <div className="main">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="header-txt">
        <h1>
          Completamos tus tareas del
          <br /> hogar y necesidades diarias.
        </h1>
      </div>
      <div className="welcome-btns">
        <a
          href="https://bonjour-ana.myshopify.com/products/servicio-de-limpieza"
          className="button-y"
        >
          Limpieza
        </a>
        <a
          href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar"
          className="button-y"
        >
          Servicios
        </a>
      </div>
    </div>
  </div>
);

export default Welcome;
