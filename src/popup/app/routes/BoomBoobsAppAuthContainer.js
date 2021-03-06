import React from 'react';
import { RouteHandler } from 'react-router-transition-context';
import { props, queries, t } from 'revenge';
import { authenticated } from 'revenge/lib/util';
import Menu from 'popup/app/components/Menu/Menu';

@authenticated()
@queries(['user'])
@props({
  app: t.Obj,
  router: t.Func,
  params: t.Obj,
  query: t.Obj,
  user: t.maybe(t.Obj),
  readyState: t.Obj
})
export default class BoomBoobsAppAuthContainer extends React.Component {

  render() {
    const { user, ...other } = this.props;
    return (
      <div className='app-wrapper'>
        <Menu />
        {user && <RouteHandler {...other} />}
      </div>
    );
  }
}
