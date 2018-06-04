import React from 'react';
import { Button } from 'semantic-ui-react';
import logo from '../../../images/png/BonjourAna_Blanco-01.png';

import './styles.css';

const Header = () => (
  <div className="l-welcome">
    <div className="main">
      <div className="header-logo">
        <img src={logo} alt="Company logo" />
      </div>
      <div className="header-txt">
        <h1 className="title">
          Completamos tus tareas del
          <br /> hogar y necesidades diarias.
        </h1>
      </div>
      <div className="welcome-btns">
        <Button className="header-btn">
          <a href="https://bonjour-ana.myshopify.com/products/servicio-de-limpieza">
            Ana Básico
          </a>
        </Button>

        <Button className="header-btn">
          <a href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar">
            Otros Servicios
          </a>
        </Button>
      </div>
    </div>
  </div>
);

export default Header;
