import React from 'react';
import Parse from 'parse';
import { RouteHandler } from 'react-router-transition-context';
import { listener, props, t } from 'revenge';
import BoomBoobsApp from '../../BoomBoobsApp';

require('normalize.css/normalize.css');
require('buildo-react-components/lib/flex/flexView.css');
require('../theme/style.scss');


@listener(BoomBoobsAppContainer.prototype.forceUpdate)
@props({
  app: BoomBoobsApp,
  router: t.Func
})
export default class BoomBoobsAppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    if (!Parse.User.current()) {
      Parse.User.logOut();
      Parse.User.logIn('BoomBoobsPostCreator', 'BoomBoobsPostCreator', this.onAuthenticatedCallback);
    } else {
      this.onAuthenticatedCallback();
    }
  }

  onAuthenticatedCallback = () => {
    this.setState({
      authenticated: true
    });
  }

  render() {
    const { app, router } = this.props;
    const { authenticated } = this.state;
    if (!authenticated) {
      return null;
    }
    return <RouteHandler app={app} router={router} />;
  }
}
