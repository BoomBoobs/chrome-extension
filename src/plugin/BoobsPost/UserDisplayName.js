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
      <div className="_3dp _29k">
        <div>
          <div className="_6a">
            <div className="_6a _6b"></div>
            <div className="_6a _6b">
              <h5 className="_5pbw">
                <span className="fwn fcg">
                  <span className="fcg">
                    <span className="fwb">
                      <a className="profileLink" href="https://www.facebook.com/antonellargese">Boom Boobs!</a>
                    </span>
                  </span>
                </span>
              </h5>
              <div className="_5pcp" id="js_x">
                <span>
                  <span className="fsm fwn fcg">
                    <a className="_5pcq" href="https://www.facebook.com/photo.php?fbid=10206614469813558&amp;set=a.1918661799365.2106445.1026623821&amp;type=3" rel="theater" ajaxify="https://www.facebook.com/photo.php?fbid=10206614469813558&amp;set=a.1918661799365.2106445.1026623821&amp;type=3&amp;src=https%3A%2F%2Fscontent.xx.fbcdn.net%2Fhphotos-xpf1%2Fv%2Ft1.0-9%2F12042866_10206614469813558_6108645910945470171_n.jpg%3Foh%3D0d0c5ac3ef9c0fb719b0f3412103800a%26oe%3D569E00BC&amp;size=768%2C960&amp;source=12&amp;player_origin=newsfeed" target="">
                      <abbr title="Saturday, September 26, 2015 at 11:16am" data-utime="1443258984" data-shorten="1" className="_5ptz timestamp livetimestamp">{locals.createdAt}</abbr>
                    </a>
                  </span>
                </span>
                <span role="presentation" aria-hidden="true"> · </span>
                <div className="_6a _29ee _4f-9 _43_1" data-hover="tooltip" id="u_jsonp_3_10" aria-label="Shared with: Antonella's friends and Arianna's friends">
                  <span>
                    <i className="_1lbg img sp_D_dU4MeWsgM sx_1e45ad" />
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
