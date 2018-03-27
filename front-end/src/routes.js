import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './scenes/Landing/index.js';
import About from './scenes/About/index';
import TermsAndPrivacy from './scenes/TermsAndPrivacy/index.js';
import Subscriptions from './scenes/Subscriptions/index.js';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/terms" component={TermsAndPrivacy} />
          <Route path="/subscriptions" component={Subscriptions} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
