import React from 'react';
import { props, queries, skinnable, t } from 'revenge';
import BoobsCreatePost from '../../components/Boobs/Post/BoobsCreatePost';

@queries(['boobsOwners'])
@skinnable()
@props({
  app: t.Obj,
  router: t.Func,
  query: t.Obj,
  params: t.Obj,
  readyState: t.Obj,
  boobsOwners: t.maybe(t.list(t.Obj))
})
export default class BoobsPostCreate extends React.Component {

  static defaultProps = {
    boobsOwners: []
  }

  prepareBoobsFile = (file) => {
    this.props.app.prepareBoobsFile(file)
      .then(() => this.forceUpdate());
  }

  createBoobsPost = (boobsFile, boobsOwner) => {
    this.props.app.createBoobsPost(boobsFile, boobsOwner)
      .then(() => this.forceUpdate());
  }

  getLocals() {
    const {
      props: {
        readyState: {
          boobsOwners: {
            loading: boobsOwnersLoading
          }
        },
        app,
        boobsOwners
      },
      prepareBoobsFile,
      createBoobsPost
    } = this;

    const boobsFile = app.getBoobsFile();

    return {
      app,
      prepareBoobsFile,
      createBoobsPost,
      boobsFile,
      boobsOwners,
      boobsOwnersLoading
    };
  }

  template(locals) {
    return (
      <BoobsCreatePost {...locals} />
    );
  }
}
