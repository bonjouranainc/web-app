import React from 'react';
import AboutGrid from './AboutGrid';
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
    <div className="about__photo-grid">
      <AboutGrid
        picture={pic1}
        name={'Valerie Santiago'}
        profession={'Profesional de limpieza'}
      />

      <AboutGrid
        picture={pic2}
        name={'Edgardo Lopez'}
        profession={'Profesional de limpieza'}
      />

      <AboutGrid
        picture={pic3}
        name={'Lee Sandra Meléndez'}
        profession={'Profesional de limpieza'}
      />

      <AboutGrid
        picture={pic4}
        name={'Juan Negrón'}
        profession={'Profesional de limpieza'}
      />
      <AboutGrid
        picture={pic5}
        name={'Alejandra Meléndez'}
        profession={'Profesional de limpieza'}
      />
    </div>
  </section>
);

export default AboutMain;
