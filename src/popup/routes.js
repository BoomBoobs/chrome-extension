import React from 'react';
import { DefaultRoute, Route } from 'react-router-transition-context';
import BoomBoobsAppContainer from './app/routes/BoomBoobsAppContainer';
import BoomBoobsAppAuthContainer from './app/routes/BoomBoobsAppAuthContainer';
import BoobsPostCreate from './app/routes/BoobsPostCreate/BoobsPostCreate';
import BoobsPostFinder from './app/routes/BoobsPostFinder/BoobsPostFinder';

export default (
  <Route handler={BoomBoobsAppContainer}>
    <Route handler={BoomBoobsAppAuthContainer}>
      <Route name='boobs-post-finder' path='/finder' handler={BoobsPostFinder} />
      <DefaultRoute name='boobs-post-create' handler={BoobsPostCreate} />
    </Route>
  </Route>
);
