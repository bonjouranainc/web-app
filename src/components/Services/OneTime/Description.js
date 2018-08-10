import React from 'react';

import '../../../styles/components/Description.css';

const Description = () => (
  <div className="description">
    <div className="description__list-box">
      <ul className="description__list">
        <li className="description__list-item">
          Aseguramos un servicio de calidad
        </li>
        <li className="description__list-item">Un personal confiable</li>
        <li className="description__list-item">
          Precios módicos para el mejor servicio
        </li>
        <li className="description__list-item">
          Garantizamos que su casa quede como quieres
        </li>
      </ul>
    </div>

    <div className="description__text">
      <p className="description__text-paragraph">
        Contamos con los mejores profesionales independientes. Al agregar este
        servicio, le trabajaremos la coordinación para el servicio de handyman,
        el cual incluye:
      </p>

      <ul className="description__text-list">
        <li className="description__text-item">Perillas y cerraduras</li>
        <li className="description__text-item">
          Colgado de estantería y cuadros
        </li>
        <li className="description__text-item">Montaje de muebles</li>
        <li className="description__text-item">
          Instalación y reparación de muebles
        </li>
        <li className="description__text-item">
          Instalación y/o montaje de televisor
        </li>
        <li className="description__text-item">Pintura interior</li>
        <li className="description__text-item">Tratamiento de ventanas</li>
      </ul>
    </div>
  </div>
);

export default Description;
