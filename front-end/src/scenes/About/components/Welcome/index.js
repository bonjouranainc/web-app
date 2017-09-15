import React, { Component } from 'react';

import './styles.css';

class Welcome extends Component {
  render() {
    return (
      <div className='a-welcome wrapper'>
        <h1>Bonjour Ana</h1>
        <h1 className='b-txt'>Tu Asistente Personal</h1>
      </div>
    );
  }
}

export default Welcome;
