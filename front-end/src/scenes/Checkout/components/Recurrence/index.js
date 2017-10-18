import React, { Component } from 'react';

import OneTimeAdditionalServices from '../AdditionalServices/components/OneTime/index.js'
import SubscriptionAdditionalServices from '../AdditionalServices/components/Subscription/index.js'
import Prices from '../AdditionalServices/components/Prices.js';

import './styles.css';

class Recurrence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oneTimeUser: false,
      weeklyUser: false,
      biWeeklyUser: false,
      monthlyUser: false,
      subscribedUser: false,
      pricing: {}
    }

    this._toggleOneTimeUser = this._toggleOneTimeUser.bind(this);
    this._toggleWeeklyUser = this._toggleWeeklyUser.bind(this);
    this._toggleBiWeeklyUser = this._toggleBiWeeklyUser.bind(this);
    this._toggleMonthlyUser = this._toggleMonthlyUser.bind(this);

  }

  render() {
    
  let Pricing = null;

  let oneTimePrice = Prices.oneTimePrice;
  let biWeeklyPrice = Prices.biWeeklyPrice;
  let monthlyPrice = Prices.monthlyPrice;

    return (
      <div className='recurrence wrapper'>
        <div className='col'>
          <p className='b-txt'>Recurrence</p> 
          <p className='s-txt'>Escoja la recurrencia de los servicios</p>
        </div>
        <div className='btn-group'>
          <button
            className='button-y-o' 
            onClick={this._toggleWeeklyUser}
          >
            Semanal
          </button>
          <button
            className='button-y-o' 
            onClick={this._toggleBiWeeklyUser}
          >
            Bi-Semanal
          </button>
          <button
            className='button-y-o' 
            onClick={this._toggleMonthlyUser}
          >
            Mensual 
          </button>
          <button
            className='button-y-o' 
            onClick={this._toggleOneTimeUser}
          >
            Una Vez
          </button>
        </div>
        { this.state.subscribedUser ?
        <SubscriptionAdditionalServices 
          userState={this.state} 
        />
        :
        null
        }
        { this.state.oneTimeUser ? 
        <OneTimeAdditionalServices 
          userState={this.state} 
        />
        :
        null }
      </div>
    );
  }

  _toggleOneTimeUser() {
      this.setState({
        oneTimeUser: true,
        weeklyUser: false,
        biWeeklyUser: false,
        monthlyUser: false,
        subscribedUser: false,
        pricing: Prices.oneTimePrice
      })
      console.log(this.state.pricing);
  }
  
  _toggleWeeklyUser() {
      this.setState({
        oneTimeUser: false,
        weeklyUser: true,
        biWeeklyUser: false,
        monthlyUser: false,
        subscribedUser: true,
        pricing: Prices.weeklyPrice
      })
      console.log(this.state.pricing);
  }

  _toggleBiWeeklyUser() {
      this.setState({
        oneTimeUser: true,
        weeklyUser: false,
        biWeeklyUser: true,
        monthlyUser: false,
        subscribedUser: true,
        pricing: Prices.biWeeklyPrice
      })
      console.log(this.state.pricing);
  }

  _toggleMonthlyUser() {
      this.setState({
        oneTimeUser: true,
        weeklyUser: false,
        biWeeklyUser: false,
        monthlyUser: true,
        subscribedUser: true,
        pricing: Prices.monthlyPrice
      })
      console.log(this.state.pricing);
  }

}

export default Recurrence;
