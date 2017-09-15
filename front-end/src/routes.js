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

class Routes extends Component {
  render() {
    return(
      <Router> 
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/learn' component={LearnMore} />
        </Switch>
      </Router>
    ); 
  }  
}


export default Routes
