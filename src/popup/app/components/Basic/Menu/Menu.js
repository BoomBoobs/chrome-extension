import React from 'react';
import { Link } from 'react-router-transition-context';
import { skinnable } from 'revenge';

import './menu.scss';

@skinnable()
export default class Menu extends React.Component {
  getLocals() {
    return {
      menuItems: [{
        text: 'Create',
        to: '/'
      }, {
        text: 'Finder',
        to: '/finder'
      }]
    };
  }

  template(locals) {
    return (
      <div className="menu">
        {locals.menuItems.map(mi => (<Link className="item" to={mi.to}>{mi.text}</Link>))}
      </div>
    );
  }
}
