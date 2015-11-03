import React from 'react';
import { props, pure, queries, skinnable, t } from 'revenge';
import BoobsList from '../../components/Boobs/List/BoobsList.js';

@queries(['boobsList'])
@skinnable()
@pure
@props({
  app: t.Obj,
  router: t.Func,
  query: t.Obj,
  params: t.Obj,
  readyState: t.Obj,
  boobsList: t.maybe(t.list(t.Obj))
})
export default class BoobsPostFinder extends React.Component {

  static defaultProps = {
    boobsList: []
  }

  getLocals() {
    const {
      boobsList
    } = this.props;
    return {
      boobsList
    };
  }

  template({ boobsList }) {

    return boobsList && <BoobsList boobsList={boobsList} />;
  }
}
