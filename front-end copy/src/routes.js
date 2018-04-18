import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../src/components/LandingPage/LandingPage';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
