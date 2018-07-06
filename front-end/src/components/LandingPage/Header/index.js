import React from 'react';
import { Button } from 'semantic-ui-react';
import logo from '../../../images/png/BonjourAna_Blanco-01.png';

import '../../../styles/components/Header.css';

const Header = () => (
  <div className="hero">
    <div className="hero__main">
      <div className="hero__logo">
        <img src={logo} alt="Company logo" />
      </div>
      <div className="hero__txt">
        <h1 className="header-title">
          Completamos tus tareas del hogar y necesidades diarias.
        </h1>
      </div>
      <div className="hero__btns">
        <Button className="button-y">
          <a href="https://bonjour-ana.myshopify.com/products/servicio-de-limpieza">
            Ana Básico
          </a>
        </Button>

        <Button className="button-y">
          <a href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar">
            Otros Servicios
          </a>
        </Button>
      </div>
    </div>
  </div>
);

export default Header;
