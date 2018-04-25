import React from 'react';

import url1 from '../../images/png/Escoga los servicios.png';
import url2 from '../../images/png/Recibe tu Visita-07.png';
import url3 from '../../images/png/Voila-07.png';

import './styles.css';

const HowItWorks = () => (
  <div className="howItWorks wrapper">
    <div>
      <h1 className="b-txt">¿Cómo funciona?</h1>
    </div>
    <div className="row">
      <div className="col group group1">
        <img src={url1} alt="image lady" className="image image-smaller" />
        <div className="cont">
          <h2>Escoja sus servicios</h2>
          <p>
            Seleccione entre una variedad de servicios para el hogar y
            seleccione el día y hora que desea recibir el servicio
          </p>
        </div>
      </div>
      <div className="col group group2">
        <img src={url2} alt="image cleaning" className="image image-bigger" />
        <div className="cont">
          <h2>Reciba su visita</h2>
          <p>
            Un personal entrenado y confiable le visitará cada semana u ocasión,
            que le ofrecera un servicio de calidad
          </p>
        </div>
      </div>
      <div className="col group group3">
        <img src={url3} alt="image chilling" className="image image-bigger" />
        <div className="cont">
          <h2>
            Voila! <br /> Todas sus tareas completadas
          </h2>
          <p>
            Llega a un hogar limpio y fresco, con las compras del supermercado
            realizada, el dry-cleaning recogido y todas sus tareas completadas.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
