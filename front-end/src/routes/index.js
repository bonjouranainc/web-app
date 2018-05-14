import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/index';

import About from '../components/About/index';
import TermsAndPrivacy from '../components/TermsAndPrivacy/index';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/terms" component={TermsAndPrivacy} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
