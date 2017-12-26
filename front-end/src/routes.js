import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Landing from './scenes/Landing/index.js';
import About from './scenes/About/index.js'
import LearnMore from './scenes/LearnMore/index.js'
import TermsAndPrivacy from './scenes/TermsAndPrivacy/index.js'
import Subscriptions from './scenes/Subscriptions/index.js'
import Menu from './components/Menu/index.js'

class Routes extends Component {
  render() {
    return(
      <Router> 
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/learn' component={LearnMore} />
          <Route path='/terms' component={TermsAndPrivacy} />
          <Route path='/subscriptions' component={Subscriptions} />
          <Route path='/menu' component={Menu} />
        </Switch>
      </Router>
    ); 
  }  
}


export default Routes
