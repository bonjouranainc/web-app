import React, { Component } from 'react';

import Header from '../../components/Header/index.js';
import Welcome from './components/Welcome/index.js'
import WhatWeDo from './components/WhatWeDo/index.js'
import Team from './components/Team/index.js'
import Staff from './components/Staff/index.js'
import Footer from '../../components/Footer/index.js';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <WhatWeDo />
        <Team />
        <Staff />
        <Footer />
      </div>
    );
  }
}

export default About;
