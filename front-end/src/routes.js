import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Landing from './scenes/Landing/components/Landing/Landing.js';
import LearnMore from './scenes/LearnMore/components/LearnMore/LearnMore.js'

class Routes extends Component {
  render() {
    return(
      <Router> 
        <div>
          <Route exact path='/' component={Landing} />
          <Route path='/learn' component={LearnMore} />
        </div>
      </Router>
    ); 
  }  
}


export default Routes
