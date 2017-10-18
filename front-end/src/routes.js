import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Landing from './scenes/Landing/index.js';
import About from './scenes/About/index.js'
import LearnMore from './scenes/LearnMore/index.js'
import Checkout from './scenes/Checkout/index.js'
import TermsAndPrivacy from './scenes/TermsAndPrivacy/index.js'

class Routes extends Component {
  render() {
    return(
      <Router> 
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/learn' component={LearnMore} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/terms' component={TermsAndPrivacy} />
        </Switch>
      </Router>
    ); 
  }  
}


export default Routes
