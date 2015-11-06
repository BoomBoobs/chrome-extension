import React from 'react';

export default class UserContent extends React.Component {
  render() {
    const boobsOwner = this.props.boobs.get('boobsOwner');
    const boobsOwnerDisplayName = `${boobsOwner.get('firstName')} ${boobsOwner.get('lastName')}`;

    return (
      <div className="_5pbx userContent">
        <p>{boobsOwnerDisplayName}</p>
      </div>
    );
  }
}
