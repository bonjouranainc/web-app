import React, { Component } from 'react';

import './styles.css';

class AmmountControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ammount: 0
    }

    this._add = this._add.bind(this);
    this._subtract = this._subtract.bind(this);
  }

  render() {
    return (
      <div className='row'>
        <button
          onClick={this._subtract}
        >
          <h1>-</h1>
        </button>
        <p className='s-txt b-txt'>
          {this.state.ammount}
        </p>
        <button
          onClick={this._add}
        >
          <h1>+</h1>
        </button>
      </div>
    ); 
  }

  _add() {
    this.setState({ 
      ammount: this.state.ammount + 1 
    });
  }

  _subtract() {
      this.state.ammount >= 1 ?
        this.setState({ 
          ammount: this.state.ammount - 1 
        })
      :
        null
  }
}

export default AmmountControls;
