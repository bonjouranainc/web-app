import React from 'react';

import '../../../styles/components/Form.css';

const Form = ({ image, label, label2, label3, label4, onFormSubmit }) => (
  <form className="form" onSubmit={onFormSubmit}>
    <div className="form__image-box">
      <img className="form__image" src={image} alt="one-time service" />
    </div>

    <label className="form__label">{label}:</label>
    <input
      className="form__input"
      type="text"
      placeholder="7:00am"
      name="hour"
    />
    <label className="form__label">{label2}:</label>
    <input className="form__input" type="text" placeholder="Lunes" name="day" />
    <label className="form__label">{label3}:</label>
    <input
      className="form__input"
      type="text"
      placeholder="3 horas"
      name="hours"
    />
    <label className="form__label">{label4}:</label>
    <input
      className="form__input"
      type="text"
      placeholder="blah"
      name="comment"
    />
    <div className="form__button">
      <button className="button-y">Programar Cita</button>
    </div>
  </form>
);

export default Form;
