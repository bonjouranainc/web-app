import React, { Component } from 'react';

import OneTimeAdditionalServices from '../AdditionalServices/components/OneTime/index.js'
import SubscriptionAdditionalServices from '../AdditionalServices/components/Subscription/index.js'

import './styles.css';

class Recurrence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribedUser: false,
      oneTimeUser: false
    }

    this._toggleOneTimeUser = this._toggleOneTimeUser.bind(this);
    this._toggleSubscriptionUser = this._toggleSubscriptionUser.bind(this);

  }

  render() {
    return (
      <div className='recurrence wrapper'>
        <div className='col'>
          <p className='b-txt'>Recurrence</p> 
          <p className='s-txt'>Escoja la recurrencia de los servicios</p>
        </div>
        <div className='row'>
          <button
            className='button-y-o' 
            onClick={this._toggleSubscriptionUser}
          >
            Semanal
          </button>
          <button
            className='button-y-o' 
            onClick={this._toggleSubscriptionUser}
          >
            Bi-Semanal
          </button>
          <button
            className='button-y-o' 
            onClick={this._toggleSubscriptionUser}
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
          <SubscriptionAdditionalServices />
          :
          null }
        {this.state.oneTimeUser ?
          <OneTimeAdditionalServices />
          :
          null }
      </div>
    );
  }

  _toggleOneTimeUser() {
      this.setState({
        subscribedUser: false,
        oneTimeUser: true
      })
  }

  _toggleSubscriptionUser() {
      this.setState({
        oneTimeUser: false,
        subscribedUser: true
      })
  }

}

export default Recurrence;
