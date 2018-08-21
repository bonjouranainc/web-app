import React from 'react';

const AnaBasicService = ({ label, label2, label3, label4, label5, label6 }) => (
  <div className="ana-basic__container">
    <div className="ana-basic__variants">
      <label className="ana-basic__label">{label}:</label>
      <select className="ana-basic__variants-option" name="houseType">
        <option value="Apartamento 1 piso">Apartamento 1 piso</option>
        <option value="Apartamento 2 pisos">Apartamento 2 pisos</option>
        <option value="Casa 1 piso">Casa 1 piso</option>
        <option value="Casa 2 pisos">Casa 2 pisos</option>
      </select>

      <label className="ana-basic__label">{label2}:</label>
      <select className="ana-basic__variants-option" name="rooms">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <label className="ana-basic__label">{label3}:</label>
      <select className="ana-basic__variants-option" name="bathrooms">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div className="ana-basic__custom">
      <label>
        {label4}:<input type="text" name="town" placeholder="Bayamón" />
      </label>
      <label>
        {label5}:<input type="text" name="day" placeholder="Miercoles" />
      </label>
      <label>
        {label6}:<input type="text" name="hour" placeholder="7:00am" />
      </label>
    </div>
  </div>
);

export default AnaBasicService;
