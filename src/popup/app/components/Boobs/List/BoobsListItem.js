import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { FlexView } from 'revenge-react-components';

import { Boobs } from '../../../models';

import './boobsListItem.scss';

@skinnable()
@pure
@props({
  boobs: Boobs
})
export default class BoobsListItem extends React.Component {
  getLocals() {
    const { boobs } = this.props;
    const boobsOwner = boobs.get('boobsOwner');
    return {
      preview: boobs.get('preview'),
      boobsOwner: {
        displayName: `${boobsOwner.get('firstName')} ${boobsOwner.get('lastName')}`
      }
    }
  }

  template({ preview, boobsOwner: { displayName } }) {
    return (
      <FlexView grow column className="boobs-post">
        <img src={preview} />
        <div>{displayName}</div>
      </FlexView>
    );
  }
}
