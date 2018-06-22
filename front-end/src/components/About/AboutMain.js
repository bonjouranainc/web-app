import React from 'react';
import AboutGrid from './AboutGrid';
import pic1 from '../../images/jpg/IMG_0055.JPG';
import pic4 from '../../images/jpg/IMG_0065.JPG';
import pic2 from '../../images/jpg/IMG_0074.JPG';
import pic5 from '../../images/jpg/IMG_0096.JPG';
import pic3 from '../../images/jpg/IMG_0097.JPG';

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
