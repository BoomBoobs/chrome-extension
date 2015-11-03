require('./index.html');
require('../icon48.png');
require('../icon96.png');
require('../icon128.png');

import React from 'react';
import Router from 'react-router-transition-context';
import patchReactRouter from './patch-react-router';

import routes from './routes';

import BoomBoobsApp from './BoomBoobsApp';
import API from './API';
import DB from './DB';

const api = new API();
const db = new DB();
const app = new BoomBoobsApp({ API: api, db });

const router = patchReactRouter(Router.create({
  transitionContext: app,
  routes,
  location: Router.HashLocation
}));

// don't fetch data during the first rendering
// if currently running on iso setup

router.run((Handler, state) => {
  const { routes, params, query } = state;
  app.fetch(routes, params, query);
  React.render(<Handler router={router} app={app} />, document.querySelector('#boom-boobs-app'));
});
