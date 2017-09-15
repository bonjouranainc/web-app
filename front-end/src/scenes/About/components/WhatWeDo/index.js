import React, { Component } from 'react';

import './styles.css';

class WhatWeDo extends Component {
  render() {
    return (
      <div className='whatWeDo wrapper'>
        <div className='col'>
          <h1>Te devolvemos <span className='b-txt'>tu tiempo</span></h1>
          <p>Nos encargamos de las tareas tediosas mientras estas en el
          trabajo, gimnasio o llevando los niños a pasear, de manera que
          llegues a un hogar limpio y fresco.</p>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
