import React from 'react';
import { props, pure, skinnable, t } from 'revenge';
import { FlexView } from 'revenge-react-components';
import BoobsListItem from './BoobsListItem';
import { Boobs } from '../../../models';

import './boobsPostList.scss';

@skinnable()
@pure
@props({
  boobsList: t.list(Boobs)
})
export default class BoobsList extends React.Component {
  getLocals() {
    const { boobsList } = this.props;
    return {
      boobsList
    };
  }

  template({ boobsList }) {
    return (
      <div className='boob-post-list'>
        <FlexView grow column vAlignContent='center'>
          {boobsList.map(b => <BoobsListItem boobs={b} />)}
        </FlexView>
      </div>
    );
  }
}
