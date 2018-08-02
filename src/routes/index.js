import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/LandingPage/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import About from '../components/About/index';
import TermsAndPrivacy from '../components/TermsAndPrivacy/index';
import HowItWorks from '../components/HowItWorks/index';
import ServicesPage from '../components/Services/ServicesPage';

import Handyman from '../components/Services/Handyman/Handyman';

const Routes = ({ client }) => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/terms" component={TermsAndPrivacy} />
        <Route path="/about" component={About} />
        <Route path="/how" component={HowItWorks} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/handyman" render={() => <Handyman client={client} />} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
