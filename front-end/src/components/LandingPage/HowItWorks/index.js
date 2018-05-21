import React from 'react';

import url1 from '../../../images/png/Escoga los servicios.png';
import url2 from '../../../images/png/Recibe tu Visita-07.png';
import url3 from '../../../images/png/Voila-07.png';

import './styles.css';

const HowItWorks = () => (
  <div className="howItWorks">
    <div className="headline">
      <h2>¿Cómo funciona?</h2>
    </div>
    <div className="col">
      <div className="row group group1">
        <img src={url1} alt="lady" className="image image-smaller" />
        <div className="cont">
          <h3>Escoja sus servicios</h3>
          <p>
            Seleccione entre una variedad de servicios para el hogar y
            seleccione el día y hora que desea recibir el servicio
          </p>
        </div>
      </div>
      <div className="row group group2">
        <img src={url2} alt="cleaning" className="image image-bigger" />
        <div className="cont">
          <h3>Reciba su visita</h3>
          <p>
            Un personal entrenado y confiable le visitará cada semana u ocasión,
            que le ofrecera un servicio de calidad
          </p>
        </div>
      </div>
      <div className="row group group3">
        <img src={url3} alt="chilling" className="image image-bigger" />
        <div className="cont">
          <h3>
            Voila! <br /> Todas sus tareas completadas
          </h3>
          <p>
            Llega a un hogar limpio y fresco, con las compras del supermercado
            realizada, el dry-cleaning recogido y todas sus tareas completadas
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
