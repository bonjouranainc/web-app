import React, { Component } from 'react';

import url1 from '../../images/services-img.svg';
import url2 from '../../images/visit-img.svg';
import url3 from '../../images/tasks-done-img.svg';

class HowItWorks extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div>
          <h1 className='h-txt'>Como funciona?</h1>
        </div>
        <div>
          <h1 className='sh-txt'>1 Escoja los servicios</h1>
          <p className='p-txt'>Seleccione entre una variedad de servicios para el hogar 
          y seleccione el día y  hora que desea recibir el servicvio.</p> 
          <embed src={ url1 } />
        </div>
        <div>
          <h1 className='sh-txt'>2 Reciba su visita</h1>
          <p className='p-txt'>Un personal entrenado y confiable le visitará cada semana 
          u ocasión para brindarle el servicio.</p>
          <embed src={ url2 } />
        <div>
          <h1 className='sh-txt'>3 Voila! Todas sus tareas completadas</h1>
          <p className='p-txt'>Llega a un hogar limpio y fresco, con las compras del 
          supermercado realizada, el dry-cleaning recogido y todas 
          sus tareas completadas.</p>
          <embed src={ url3 } />
        </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
