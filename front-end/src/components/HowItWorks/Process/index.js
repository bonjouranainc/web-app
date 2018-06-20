import React from 'react';

import url1 from '../../../images/png/Escoga los servicios.png';
import url2 from '../../../images/png/Recibe tu Visita-07.png';
import url3 from '../../../images/png/Voila-07.png';

const Process = () => (
  <div className="process">
    <div className="process__heading">
      <h2 className="process__heading--title">¿Cómo funciona?</h2>
      <p className="process__heading--text">
        Bonjour Ana es tu asistente personal para el hogar y necesidades
        diarias. Te proveemos y coordinamos una variedad de servicios enfocados
        en el hogar para que no tengas que gastar tiempo, energía y coordinación
        y dedicarle tiempo a lo que realmente importa
      </p>
    </div>

    <div className="process__body">
      <div className="process__content process__content--even">
        <div className="process__content--image">
          <img src={url1} alt="" />
        </div>
        <div className="process__content--text">
          <h3 className="header-tertiary-Title">1 Escoja su servicio</h3>
          <p className="paragraph paragraph--even">
            Seleccione entre una variedad de servicios para el hogar y escoja el
            día y hora que desea recibir el servicio.
          </p>
        </div>
      </div>

      <div className="process__content">
        <div className="process__content--image">
          <img src={url2} alt="" />
        </div>
        <div className="process__content--text">
          <h3 className="header-tertiary-Title">2 Reciba su visita</h3>
          <p className="paragraph paragraph--odd">
            Un personal entrenado y confiable le visitará cada semana u ocasión
            para brindarle el servicio.
          </p>
        </div>
      </div>

      <div className="process__content process__content--even">
        <div className="process__content--image">
          <img src={url3} alt="" />
        </div>
        <div className="process__content--text">
          <h3 className="header-tertiary-Title">
            3 Voila! Todas sus tareas completadas
          </h3>
          <p className="paragraph paragraph--even">
            Llega a un hogar limpio y fresco, con las compras del supermercado
            realizada, el dry-cleaning recogido y todas sus tareas completadas.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Process;
