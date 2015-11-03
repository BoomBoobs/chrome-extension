import React from 'react';
import { props, pure, skinnable, t } from 'revenge';

@skinnable()
@pure
@props({
  boobsOwner: t.Obj
})
export default class BoobsOwnerCard extends React.Component {

  getLocals() {
    return {
      ...this.props
    };
  }

  template(locals) {
    const { boobsOwner } = locals;

    return (
      <div>
        {`${boobsOwner.get('firstName')} ${boobsOwner.get('lastName')}`}
      </div>
    );
  }
}
