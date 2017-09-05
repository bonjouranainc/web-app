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
          <h1 className='h-txt-b'>Como funciona?</h1>
        </div>
        <div>
          <h1 className='sh-txt-b'>1 Escoja los servicios</h1>
          <p className='p-txt'>Seleccione entre una variedad de servicios para el hogar 
          y seleccione el día y  hora que desea recibir el servicvio.</p> 
          <img src={ url1 } onerror='this.src={ fallback1 }' />
        </div>
        <div>
          <h1 className='sh-txt-b'>2 Reciba su visita</h1>
          <p className='p-txt'>Un personal entrenado y confiable le visitará cada semana 
          u ocasión para brindarle el servicio.</p>
          <img src={ url2 } onerror='this.src={ fallback2 }' />
        <div>
          <h1 className='sh-txt-b'>3 Voila! Todas sus tareas completadas</h1>
          <p className='p-txt'>Llega a un hogar limpio y fresco, con las compras del 
          supermercado realizada, el dry-cleaning recogido y todas 
          sus tareas completadas.</p>
          <img src={ url3 } onerror='this.src={ fallback3}' />
        </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
