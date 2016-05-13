import React from 'react';
import cx from 'classnames';
import { props, pure, skinnable, t } from 'revenge';
import App from '../../../../BoomBoobsApp';
import Select from 'react-select';
import { includes } from 'lodash';
import { FlexView, LoadingSpinner } from 'revenge-react-components';

import 'buildo-react-components/src/loading-spinner/style.scss';
import 'react-select/dist/default.css';
import './boobsCreatePost.scss';
const initialState = {
  isBoobsFileChosen: false,
  addNewBoobsOwner: false,
  boobsPostCreated: false,
  loading: false,
  form: {
    boobsOwner: {
      id: null,
      firstName: null,
      lastName: null,
      website: null
    }
  }
};
@skinnable()
@pure
@props({
  app: App,
  boobsFile: t.maybe(t.Obj),
  prepareBoobsFile: t.Func,
  createBoobsPost: t.Func,
  boobsOwners: t.maybe(t.list(t.Obj)),
  boobsOwnersLoading: t.Bool
})

export default class BoobsCreatePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // POST CREATION
  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      loading: true
    }, () => {
      const { boobsOwner } = this.state.form;
      this.props.createBoobsPost(this.props.boobsFile.file, boobsOwner)
        .then(() => {
          // be VERY optimistic
          this.setState(initialState);
        });
    });
  }

  togglAddNewBoobsOwner = () => {
    this.setState({
      addNewBoobsOwner: !this.state.addNewBoobsOwner,
      form: initialState.form
    });
  }

  onBoobsFileChange = (e) => {
    this.props.prepareBoobsFile(e.target.files[0]);
  }


  isValidSelectedBoobsOwner = () => {
    const { id } = this.state.form.boobsOwner;
    return !!id;
  }

  isValidNewBoobsOwner = () => {
    const { firstName, lastName } = this.state.form.boobsOwner;
    return !!firstName && !!lastName;
  }

  bindBoobsOwnerKey = (key) => (e) => this.updateBoobsOwner(key, e.target.value)

  onBoobOwnerChange = (id) => this.updateBoobsOwner('id', id)

  updateBoobsOwner = (key, value) => {
    const boobsOwner = {
      ...this.state.form.boobsOwner,
      [key]: value
    };
    this.setState({
      form: {
        boobsOwner
      }
    });
  }

  getLocals() {
    const {
      onBoobsFileChange,
      onBoobOwnerChange,
      onBoobsFileSubmit,
      isValidNewBoobsOwner,
      isValidSelectedBoobsOwner,
      onSubmit,
      props,
      state
    } = this;

    const {
      isBoobsFileChosen,
      addNewBoobsOwner,
      loading,
      form: {
        boobsOwner
      }
    } = state;

    const {
      boobsFile,
      boobsOwners,
      boobsOwnersLoading
    } = props;

    const boobsOwnersOptions = boobsOwners ? boobsOwners.map(bo => ({
      value: bo.id,
      label: `${bo.get('firstName')} ${bo.get('lastName')}`
    })) : [];

    const boomBoobsPostCreationEnabled = isValidSelectedBoobsOwner() || isValidNewBoobsOwner();
    const createButtonClasses = cx('create-post', {
      disabled: !boomBoobsPostCreationEnabled
    });

    return {
      form: {
        boobsOwner
      },
      loading,
      onSubmit: boomBoobsPostCreationEnabled && onSubmit,
      togglAddNewBoobsOwner: this.togglAddNewBoobsOwner,
      boobsFile,
      addNewBoobsOwner,
      boobsOwnersOptions,
      boobsOwnersLoading,
      bindBoobsOwnerKey: this.bindBoobsOwnerKey,
      onBoobOwnerChange,
      filterOptions: (options = [], filter) => options.filter(o => includes(o.label.toLowerCase(), filter.toLowerCase())),
      onBoobsFileChange,
      onBoobsFileSubmit: isBoobsFileChosen && onBoobsFileSubmit,
      createButtonClasses
    };
  }

  template(locals) {
    const uploadBoobsFileBlock = () => (
      <div className='boob-file'>
        <label htmlFor='boobsFile'>Choose the boobs to uplaod:</label>
        <FlexView grow row vAlignContent='center'>
          <FlexView column>
            <input
              ref='boobsFile'
              type='file'
              name='boobsFile'
              onChange={locals.onBoobsFileChange}
              accept='image/*'
            />
          </FlexView>
        </FlexView>
      </div>
    );

    const boobsOwnerBlock = () => (
      <div>
        <img src={locals.boobsFile && locals.boobsFile.url} />
        <FlexView column grow className='boobs-owner'>
          {!locals.addNewBoobsOwner ? (
            <FlexView column grow>
              <h3>Select boobs owner!</h3>
              {!locals.boobsOwnersLoading && (
                <Select
                  options={locals.boobsOwnersOptions}
                  filterOptions={locals.filterOptions}
                  onChange={locals.onBoobOwnerChange}
                  value={locals.form && locals.form.boobsOwner.id}
                  placeholder={"Who is the owner of those boobs?"}
                />
              )}
            </FlexView>
          ) : (
            <FlexView column grow>
              <h3>New boobs owner</h3>
              <div>
                <label>Firstname</label>
                <input
                  type='text'
                  onChange={locals.bindBoobsOwnerKey('firstName')}
                  value={locals.form.boobsOwner.firstName}
                />
              </div>
              <div>
                <label>Lastname</label>
                <input
                  type='text'
                  onChange={locals.bindBoobsOwnerKey('lastName')}
                  value={locals.form.boobsOwner.lastName}
                />
              </div>
              <div>
                <label>Website (if any)</label>
                <input
                  type='text'
                  onChange={locals.bindBoobsOwnerKey('website')}
                  value={locals.form.boobsOwner.website}
                />
              </div>
            </FlexView>
          )}
          <label>
            Or <a onClick={locals.togglAddNewBoobsOwner}>{locals.addNewBoobsOwner ? 'choose' : 'add'}</a> a boobs owner!
          </label>
        </FlexView>
      </div>
    );

    return (
      <form className='boobs-post-create-form' onSubmit={locals.onSubmit}>
        {!locals.boobsFile && uploadBoobsFileBlock()}
        {locals.boobsFile && boobsOwnerBlock()}
        {locals.boobsFile && (
          <button
            className={locals.createButtonClasses}
            onClick={locals.onSubmit}
          >
            Create BoobsPost!
          </button>
        )}
        {locals.loading && <LoadingSpinner size='20px' />}
      </form>
    );
  }
}
