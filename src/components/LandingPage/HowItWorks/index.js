import React, { Component } from 'react';

import url1 from '../../../images/png/Escoga los servicios.png';
import url2 from '../../../images/png/Recibe tu Visita-07.png';
import url3 from '../../../images/png/Voila-07.png';

export default class HowItWorks extends Component {
  render() {
    return (
      <div className="howItWorks">
        <div className="groups">
          {/* first content */}
          <div className="group">
            <div className="group-image">
              <img className="first-image" src={url1} alt="" />
            </div>
            <div className="group-text group-text-1 group-text-even">
              <h3 className="header-tertiary-Title">Escoja sus servicios</h3>
              <p className="paragraph">
                Seleccione entre una variedad de servicios para el hogar y
                escoja el día y hora que desea recibir el servicio.
              </p>
            </div>
          </div>

          {/* second content */}
          <div className="group group-reverse">
            <div className="group-image" id="group-image2">
              <img src={url2} alt="" />
            </div>
            <div className="group-text group-text-odd">
              <h3 className="header-tertiary-Title">Reciba su visita</h3>
              <p className="paragraph">
                Un personal entrenado y confiable le visitará cada semana u
                ocasión para brindarle el servicio.
              </p>
            </div>
          </div>

          {/* third content */}
          <div className=" group">
            <div className="group-image">
              <img src={url3} alt="" />
            </div>
            <div className="group-text group-text-even">
              <h3 className="header-tertiary-Title">
                Voila! <br />
                Todas sus tareas completadas
              </h3>
              <p className="paragraph">
                Llega a un hogar limpio y fresco y con todas sus tareas
                completadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
