import React from 'react';

const AnaBasicService = ({ label, label2, label3, label4, label5, label6 }) => (
  <div>
    <select name="houseType">
      <option>{label}</option>
      <option value="Apartamento 1 piso">Apartamento 1 piso</option>
      <option value="Apartamento 2 pisos">Apartamento 2 pisos</option>
      <option value="Casa 1 piso">Casa 1 piso</option>
      <option value="Casa 2 pisos">Casa 2 pisos</option>
    </select>

    <select name="rooms">
      <option>{label2}</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>

    <select name="bathrooms">
      <option>{label3}</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label>
      {label4}:<input type="text" name="town" placeholder="Bayamón" />
    </label>
    <label>
      {label5}:<input type="text" name="day" placholder="Miercoles" />
    </label>
    <label>
      {label6}:<input type="text" name="hour" placholder="7:00am" />
    </label>
  </div>
);

export default AnaBasicService;
