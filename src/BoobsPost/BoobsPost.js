import React from 'react';

import UserInfoBlock from './UserInfoBlock';
import PostImage from './PostImage';
import PostInteractionsBox from './PostInteractionsBox';


export default function BoobPost(boobs) {


  class BoobsPost extends React.Component {
    render() {
      return (
        <div className="_4ikz boobs">
          <div>
            <div id="u_jsonp_2_1">
              <div>
                <div className="_5jmm _5pat _3lb4 _x72 _50nb">
                  <div className="_4-u2 mbm _5v3q _2l4l _4-u8">
                    <div className="_3ccb">
                      <div></div>
                      <div className="userContentWrapper _5pcr">
                        <div className="_1dwg">
                          <UserInfoBlock boobs={boobs} />
                          <PostImage boobs={boobs} />
                        </div>
                        <PostInteractionsBox />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const fakeDiv = document.createElement('div');
  fakeDiv.innerHTML = React.renderToString(<BoobsPost />);
  return fakeDiv.firstChild;
}
