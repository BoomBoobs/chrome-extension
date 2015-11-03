import React from 'react';
import { props, pure, skinnable, t } from 'revenge';
import BoobsOwnerCard from '../BoobsOwnerCard/BoobsOwnerCard';

@skinnable()
@pure
@props({
  boobsOwners: t.maybe(t.list(t.Obj)),
  loading: t.Bool
})
export default class BoobsOwnersList extends React.Component {

  getLocals() {
    const { boobsOwners } = this.props;
    return {
      boobsOwners: boobsOwners || []
    };
  }

  template(locals) {
    return (
      <div>
        {locals.boobsOwners && locals.boobsOwners.map((b, k) => (<BoobsOwnerCard key={k} boobsOwner={b} />))}
      </div>
    );
  }
}
