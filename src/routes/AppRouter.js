import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import About from '../components/About/index';
import TermsAndPrivacy from '../components/TermsAndPrivacy/index';
import HowItWorks from '../components/HowItWorks/index';
import ServicesPage from '../components/Services/ServicesPage';
import Service from '../components/Services/OneTime/Service';
import AnaBasic from '../components/Services/AnaBasic/AnaBasic';

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
        <Route
          path="/limpieza"
          render={() => (
            <AnaBasic
              client={client}
              title={'Ana Basic'}
              label={'Tipo de hogar'}
              label2={'Cuartos'}
              label3={'Baños'}
              label4={'Pueblo'}
              label5={'Dia'}
              label6={'Hora'}
              productId={'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzExNzAzMjA2MzUx'}
            />
          )}
        />
        <Route
          path="/handyman"
          render={() => (
            <Service
              client={client}
              title={'Handyman'}
              label={'Hora'}
              label2={'Dia'}
              productId={'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzExNzcyNTkzMjMx'}
            />
          )}
        />
        <Route
          path="/plomeria"
          render={() => (
            <Service
              client={client}
              title={'Plomería'}
              productId={'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzExNzcyNTkzNDg3'}
            />
          )}
        />
        <Route
          path="/electricista"
          render={() => (
            <Service
              client={client}
              title={'Electricista'}
              productId={'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzExNzcyNTk3MDcx'}
            />
          )}
        />
        <Route
          path="/ventanas"
          render={() => (
            <Service
              client={client}
              title={'Limpieza de Ventanas'}
              productId={'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzI5MTk0OTc3MjgyNw=='}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
