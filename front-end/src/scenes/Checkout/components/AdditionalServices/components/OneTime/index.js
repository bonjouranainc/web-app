import React, { Component } from 'react';

import HomeType from '../../../HomeType/index.js';
import Prices from '../Prices.js';

import '../../styles.css';

class OneTime extends Component {
 constructor(props) {
    super(props);

    this.state = {
      oven: false,
      fridge: false,
      patio: false,
      cupboard: false,
      cleanHouse: false,
      laundry: false,
      landscaping: false
    }

    this._toggleOven = this._toggleOven.bind(this);
    this._toggleFridge = this._toggleFridge.bind(this);
    this._togglePatio = this._togglePatio.bind(this); 
    this._toggleCupboard = this._toggleCupboard.bind(this);
    this._toggleCleanHouse = this._toggleCleanHouse.bind(this);
    this._toggleLaundry = this._toggleLaundry.bind(this);
    this._toggleLandscaping = this._toggleLandscaping.bind(this);

  }

  render() {
    return (
      <div className='additional-services wrapper'>
        <div className='col'>
          <p className='b-txt'>Additional Services</p> 
          <p className='s-txt'>Escoja servicios adicionales</p>
        </div>
        <div className='btn-group'>
          <div className='checkbox-btn'>
            <label for='estufa'>
            <input type='checkbox' className='service' id='estufa' 
              onClick={this._toggleOven} 
            />
              <span>Estufa</span>
            </label>
          </div>
          <div className='checkbox-btn'>
            <label for='nevera'>
              <input type='checkbox' className='service' id='nevera' 
                onClick={this._toggleFridge} 
              />
                <span>Nevera</span>
            </label>
          </div>
          <div className='checkbox-btn'>
          <label for='patio'>
            <input type='checkbox' className='service' id='patio' 
              onClick={this._togglePatio} 
            />
              <span>Patio o Terraza</span>
          </label>
          </div>
          <div className='checkbox-btn'>
          <label for='alacena'>
            <input type='checkbox' className='service' id='alacena' 
              onClick={this._toggleCupboard} 
            />
              <span>Alacena y Gabinetes</span>
          </label>
          </div>
          <div className='checkbox-btn'>
          <label for='recogido'>
            <input type='checkbox' className='service' id='recogido' 
              onClick={this._toggleCleanHouse} 
            />
              <span>Recogido del hogar</span>
          </label>
          </div>
          <div className='checkbox-btn'>
          <label for='laundry'>
            <input type='checkbox' className='service' id='laundry' 
              onClick={this._toggleLaundry} 
            />
              <span>Laundry</span>
          </label>
          </div>
          <div className='checkbox-btn'>
          <label for='landscaping'>
            <input type='checkbox' className='service' id='landscaping' 
              onClick={this._toggleLandscaping} 
            />
              <span>Limpieza de parte frontal de la casa</span>
          </label>
          </div>
        </div>
      </div>
    );
  }

    _toggleOven() {
      this.setState({
        oven: !this.state.oven
      }) 
    } 

    _toggleFridge() {
      this.setState({
        fridge: !this.state.fridge
      }) 
    }
    
    _togglePatio() {
      this.setState({
        patio: !this.state.patio
      }) 
    
    } 
    
    _toggleCupboard() {
      this.setState({
        cupboard: !this.state.cupboard
      }) 
    }

    _toggleCleanHouse() {
      this.setState({
        cleanHoue: !this.state.cleanHouse
      }) 
    }
    
    _toggleLaundry() {
      this.setState({
        laundry: !this.state.laundry
      }) 
    }

    _toggleLandscaping() {
      this.setState({
        landscaping: !this.state.landscaping
      }) 
    }

}

export default OneTime;
