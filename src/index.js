import React from 'react';
import ReactDOM from 'react-dom';
import Client from 'shopify-buy';
import AppRouter from './routes/AppRouter';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

const domain = 'bonjour-ana.myshopify.com';
const accessToken = '8079d4df4b84405bad995555bc06d537';

const client = Client.buildClient({
  domain: domain,
  storefrontAccessToken: accessToken
});

ReactDOM.render(<AppRouter client={client} />, document.getElementById('root'));
