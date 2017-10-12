import React, { Component } from 'react';

import './styles.css';

class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <button onClick={this.props._leftClick}>
          <i className="material-icons">&#xE5C4;</i>
        </button>
        <button onClick={this.props._rightClick}>
          <i className="material-icons">&#xE5C8;</i>
        </button>
      </div>
    );  
  }
}

export default Navigation;
