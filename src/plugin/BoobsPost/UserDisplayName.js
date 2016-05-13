import React from 'react';
import { props, pure, t, skinnable } from 'revenge';
import moment from 'moment';

@props({
  boobs: t.Obj
})
@pure
@skinnable()
export default class UserDisplayName extends React.Component {

  getLocals() {
    const { boobs } = this.props;


    return {
      createdAt: moment(boobs.get('createdAt')).fromNow()
    };
  }

  template(locals) {

    return (
      <div className='_3dp _29k'>
        <div>
          <div className='_6a'>
            <div className='_6a _6b'></div>
            <div className='_6a _6b'>
              <h5 className='_5pbw'>
                <span className='fwn fcg'>
                  <span className='fcg'>
                    <span className='fwb'>
                      <a className='profileLink' href='https://www.facebook.com/Boom-Boobs-1651548501800402'>Boom Boobs!</a>
                    </span>
                  </span>
                </span>
              </h5>
              <div className='_5pcp' id='js_x'>
                <span>
                  <span className='fsm fwn fcg'>
                    <a className='_5pcq' target=''>
                      <abbr title='Saturday, September 26, 2015 at 11:16am' data-utime='1443258984' data-shorten='1' className='_5ptz timestamp livetimestamp'>{locals.createdAt}</abbr>
                    </a>
                  </span>
                </span>
                <span role='presentation' aria-hidden='true'> · </span>
                <div className='_6a _29ee _4f-9 _43_1' data-hover='tooltip' id='u_jsonp_3_10' aria-label=''>
                  <span>
                    <i className='_1lbg img sp_D_dU4MeWsgM sx_1e45ad' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
