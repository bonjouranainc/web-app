import React, { Component } from 'react';

import url1 from '../../images/services-img.svg';
import url2 from '../../images/visit-img.svg';
import url3 from '../../images/tasks-done-img.svg';

class HowItWorks extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Como funciona?</h1>
        </div>
        <div>
          <h1>1 Escoja los servicios</h1>
          <p>Seleccione entre una variedad de servicios para el hogar 
          y seleccione el día y  hora que desea recibir el servicvio.</p> 
          <embed src={ url1 } />
        </div>
        <div>
          <h1>2 Reciba su visita</h1>
          <p>Un personal entrenado y confiable le visitará cada semana 
          u ocasión para brindarle el servicio.</p>
          <embed src={ url2 } />
        <div>
          <h1>3 Voila! Todas sus tareas completadas</h1>
          <p>Llega a un hogar limpio y fresco, con las compras del 
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
