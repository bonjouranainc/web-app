import React from 'react';
import pic1 from '../../images/jpg/1.jpg';
import pic4 from '../../images/jpg/2.jpg';
import pic2 from '../../images/jpg/3.jpg';
import pic5 from '../../images/jpg/5.jpg';
import pic3 from '../../images/jpg/4.jpg';

import '../../styles/components/About.css';

const About = () => (
  <section className="about">
    <div className="about__heading">
      <h2 className="about__title">Nosotros</h2>
      <p className="about__subTitle">
        Conoce a algunos de nuestros Ana Helpers. Contamos con una gran
        diversidad de profesionales listos para ayudarte.
      </p>
    </div>

    <div className="about__grid">
      <div className="about__helper-box">
        <img src={pic1} alt="Profesional de limpieza" className="about__img" />
        <p className="about__helper-name">Valerie</p>
        {/* <p className="about__helper-hobby">
          "Me gusta hacer mis labores de ama de casa."
        </p> */}
      </div>

      <div className="about__helper-box">
        <img src={pic2} alt="Profesional de limpieza" className="about__img" />
        <p className="about__helper-name">Edgardo</p>
        {/* <p className="about__helper-hobby">
          "Soy deportista en lucha olímpica"
        </p> */}
      </div>

      <div className="about__helper-box">
        <img src={pic3} alt="Profesional de limpieza" className="about__img" />
        <p className="about__helper-name">Lee Sandra</p>
        {/* <p className="about__helper-hobby">
          "Me gusta hacer mis labores de ama de casa."
        </p> */}
      </div>

      <div className="about__helper-box">
        <img src={pic4} alt="Profesional de limpieza" className="about__img" />
        <p className="about__helper-name">Juan</p>
        {/* <p className="about__helper-hobby">
          "Me gusta ir al cine en mi tiempo libre"
        </p> */}
      </div>

      <div className="about__helper-box">
        <img src={pic5} alt="Profesional de limpieza" className="about__img" />
        <p className="about__helper-name">Alejandra</p>
        {/* <p className="about__helper-hobby">"Me gusta pasear con mis hijos"</p> */}
      </div>
    </div>
  </section>
);

export default About;
