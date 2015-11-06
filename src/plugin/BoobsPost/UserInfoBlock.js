import React from 'react';

import UserAvatar from './UserAvatar';
import UserDisplayName from './UserDisplayName';


export default class UserInfoBlock extends React.Component {
  render() {
    return (
      <div className="clearfix _5x46">
        <UserAvatar />
        <UserDisplayName boobs={this.props.boobs} />
      </div>
    );
  }
}
