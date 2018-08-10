import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import About from '../components/About';
import TermsAndPrivacy from '../components/TermsAndPrivacy';
import HowItWorks from '../components/HowItWorks';
import ServicesPage from '../components/Services/ServicesPage';
import OneTime from '../components/Services/OneTime/OneTime';
import AnaBasic from '../components/Services/AnaBasic/AnaBasic';

import handyman from '../images/png/Handyman-01.png';

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
            <OneTime
              client={client}
              image={handyman}
              title={'Handyman'}
              label={'Hora'}
              label2={'Dia'}
              label3={'Horas'}
              label4={'Comentario'}
              productId={'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzExNzcyNTkzMjMx'}
            />
          )}
        />
        <Route
          path="/plomeria"
          render={() => (
            <OneTime
              client={client}
              title={'Plomería'}
              productId={'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzExNzcyNTkzNDg3'}
            />
          )}
        />
        <Route
          path="/electricista"
          render={() => (
            <OneTime
              client={client}
              title={'Electricista'}
              productId={'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzExNzcyNTk3MDcx'}
            />
          )}
        />
        <Route
          path="/ventanas"
          render={() => (
            <OneTime
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
