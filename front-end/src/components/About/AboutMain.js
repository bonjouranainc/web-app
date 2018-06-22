import React from 'react';
import pic1 from '../../images/jpg/IMG_0055.JPG';
import pic2 from '../../images/jpg/IMG_0065.JPG';
import pic3 from '../../images/jpg/IMG_0074.JPG';
import pic4 from '../../images/jpg/IMG_0096.JPG';
import pic5 from '../../images/jpg/IMG_0097.JPG';

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
      <div className="about__photo-grid--img">
        <img src={pic1} alt="ana helper" />
        <div className="about__photo-grid--desc">
          <h4>Valerie Santiago</h4>
          <p>Profesional de limpieza</p>
        </div>
      </div>

      <div className="about__photo-grid--img">
        <img src={pic2} alt="ana helper" />
        <div className="about__photo-grid--desc">
          <h4>Valerie Santiago</h4>
          <p>Profesional de limpieza</p>
        </div>
      </div>

      <div className="about__photo-grid--img">
        <img src={pic3} alt="ana helper" />
        <div className="about__photo-grid--desc">
          <h4>Valerie Santiago</h4>
          <p>Profesional de limpieza</p>
        </div>
      </div>

      <div className="about__photo-grid--img">
        <img src={pic4} alt="ana helper" />
        <div className="about__photo-grid--desc">
          <h4>Valerie Santiago</h4>
          <p>Profesional de limpieza</p>
        </div>
      </div>

      <div className="about__photo-grid--img">
        <img src={pic5} alt="ana helper" />
        <div className="about__photo-grid--desc">
          <h4>Valerie Santiago</h4>
          <p>Profesional de limpieza</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMain;
