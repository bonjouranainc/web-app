import React, { Component } from 'react';

import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index.js';

import url1 from './images/ba-supermarket.svg';
import url2 from './images/wave.svg';

import './styles.css';

class Subscriptions extends Component {
  render() {
    return (
      <div>
        <div className="subscriptions wrapper">
          <Header />
          <div className="col">
            <h1 className="b-txt">Subscripciones y servicios</h1>
          </div>
          <div className="col">
            <p>
              Al escoger una de nuestras subscripciones, le visitaremos una vez
              en semana para completarle todos sus pedidos. Entre los servicios
              y pedidos que trabajamos se encuentra la limpieza, entrega de
              compra, laundry, dry-cleaning y otros servicios adicionales. Usted
              debe elegir la subscripción que más se ajuste a sus necesidades
              pues no todas incluyen los mismos servicio.
            </p>
          </div>
          <div className="row sub-images">
            <a href="/">
              <img src={url1} alt="" />
              <div className="label">
                <p>Bonjour Ana Basic</p>
                <p className="s-txt">From $79.96</p>
              </div>
            </a>
            <a href="/">
              <img src={url2} alt="" />
              <div className="label">
                <p>Selecciona Tus Servicios</p>
                <p className="s-txt">From $58.99</p>
              </div>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Subscriptions;
