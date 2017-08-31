import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Landing from './scenes/Landing/components/Landing/Landing.js';
import LearnMore from './scenes/LearnMore/components/LearnMore/LearnMore.js'

class Routes extends Component {
  render() {
    return(
      <Router> 
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/learn' component={LearnMore} />
        </Switch>
      </Router>
    ); 
  }  
}


export default Routes
