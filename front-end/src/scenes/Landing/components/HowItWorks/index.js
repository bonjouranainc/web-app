import React, { Component } from 'react';

import url1 from '../../images/svg/services-img.svg';
import url2 from '../../images/svg/visit-img.svg';
import url3 from '../../images/svg/tasks-done-img.svg';

import fallback1 from '../../images/png/services-img.png';
import fallback2 from '../../images/png/visit-img.png';
import fallback3 from '../../images/png/tasks-done-img.png';

import './styles.css';

class HowItWorks extends Component {
  render() {
    return (
      <div className='howItWorks wrapper'>
        <div>
          <h1 className='b-txt'>Como funciona?</h1>
        </div>
        <div className='row'>
          <img src={ url1 } onerror='this.src={ fallback1 }' />
          <h2>1 Escoja los servicios</h2>
          <p>Seleccione entre una variedad de servicios para el hogar 
          y seleccione el día y  hora que desea recibir el servicvio.</p> 
        </div>
        <div className='row'>
          <img src={ url2 } onerror='this.src={ fallback2 }' />
          <h2>2 Reciba su visita</h2>
          <p>Un personal entrenado y confiable le visitará cada semana 
          u ocasión para brindarle el servicio.</p>
        <div className='row'>
          <img src={ url3 } onerror='this.src={ fallback3}' />
          <h2>3 Voila! Todas sus tareas completadas</h2>
          <p>Llega a un hogar limpio y fresco, con las compras del 
          supermercado realizada, el dry-cleaning recogido y todas 
          sus tareas completadas.</p>
        </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
