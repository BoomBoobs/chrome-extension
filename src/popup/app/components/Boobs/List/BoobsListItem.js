import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { FlexView } from 'revenge-react-components';
import BoobsOwnerCard from '../../BoobsOwnerCard/BoobsOwnerCard';

import { Boobs } from '../../../models';

import './boobsListItem.scss';

@skinnable()
@pure
@props({
  boobs: Boobs
})
export default class BoobsListItem extends React.Component {
  getLocals() {
    return this.props;
  }

  template({ boobs }) {
    return (
      <FlexView grow column className="boobs-post">
        <img src={boobs.get('preview')} />
        <BoobsOwnerCard
          boobsOwner={boobs.get('boobsOwner')}
        />
      </FlexView>
    );
  }
}
