import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/index';

//import About from '../scenes/About/index';
import TermsAndPrivacy from '../scenes/TermsAndPrivacy/index.js';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/terms" component={TermsAndPrivacy} />
          {/* <Route path="/about" component={About} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
