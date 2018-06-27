import React from 'react';
import pic1 from '../../images/jpg/1.jpg';
import pic4 from '../../images/jpg/2.jpg';
import pic2 from '../../images/jpg/3.jpg';
import pic5 from '../../images/jpg/5.jpg';
import pic3 from '../../images/jpg/4.jpg';

const AboutMain = () => (
  <section className="about">
    <div className="about__heading">
      <h2 className="about__heading--header">Nosotros</h2>
      <p className="about__heading--text">
        Conoce a algunos de nuestros Ana Helpers. Contamos con una gran
        diversidad de profesionales listos para ayudarte.
      </p>
    </div>

    <div className="about__grid">
      <div className="about__img-box">
        <img src={pic1} alt="Profesional de limpieza" className="about__img" />
      </div>

      <div className="about__img-box">
        <img src={pic2} alt="Profesional de limpieza" className="about__img" />
      </div>

      <div className="about__img-box">
        <img src={pic3} alt="Profesional de limpieza" className="about__img" />
      </div>

      <div className="about__img-box">
        <img src={pic4} alt="Profesional de limpieza" className="about__img" />
      </div>

      <div className="about__img-box">
        <img src={pic5} alt="Profesional de limpieza" className="about__img" />
      </div>
    </div>
  </section>
);

export default AboutMain;
