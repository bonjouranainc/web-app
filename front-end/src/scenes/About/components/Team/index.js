import React, { Component } from 'react';

import ceo from '../../images/ceo.jpg';
import cmo from '../../images/cmo.jpg';
import coo from '../../images/coo.jpg';
import dev from '../../images/dev.png';
import fm from '../../images/field-manager.jpg';
import gd from '../../images/gd.jpg';
import mkt from '../../images/mkt-intern.jpg';

import './styles.css';

class Team extends Component {
  render() {
    return (
      <div className='team wrapper'>
        <div className='row'>
          <h1 className='b-txt'>Team</h1>
        </div>
        <div className='row'>
          <div className='person'>
            <img src={ ceo } />
            <p className='b-txt s-txt'>
              CEO
            </p>
          </div>
          <div className='person'>
            <img src={ cmo } />
            <p className='b-txt s-txt'>
              CMO
            </p>
          </div>
          <div className='person'>
            <img src={ coo } />
            <p className='b-txt s-txt'>
              COO
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='person'>
            <img src={ gd } />
            <p className='b-txt s-txt'>
              GD Intern
            </p>
          </div>
          <div className='person'>
            <img src={ dev } />
            <p className='b-txt s-txt'>
              Developer
            </p>
          </div>
          <div className='person'>
            <img src={ mkt } />
            <p className='b-txt s-txt'>
              MKT Intern
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='person'>
            <img src={ fm } />
            <p className='b-txt s-txt'>
              Field Manager
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
