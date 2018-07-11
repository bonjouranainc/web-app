import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/LandingPage/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import About from '../components/About/index';
import TermsAndPrivacy from '../components/TermsAndPrivacy/index';
import HowItWorks from '../components/HowItWorks/index';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/terms" component={TermsAndPrivacy} />
            <Route path="/about" component={About} />
            <Route path="/how" component={HowItWorks} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Routes;
