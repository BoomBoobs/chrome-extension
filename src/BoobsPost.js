import React from 'react';

export default function BoobPost(boobs) {

  console.log(boobs.get('boobsOwner'));

  class PostAvatar extends React.Component {

    render() {
      return(
        <a className="_5pb8 _29h _303" href="https://www.facebook.com/antonellargese?fref=nf">
          <div className="_38vo">
            <img className="_s0 _5xib _5sq7 _44ma _rw img" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB8SegMn3CfoU6r4HnxJmcLyfk4fOjy_YKzDdaW4u1nwBUqic7Ow" alt="" />
          </div>
        </a>
      );
    }
  };

  class PostUserDisplayName extends React.Component {
    render() {
      const boobsOwner = boobs.get('boobsOwner');
      const boobsOwnerDisplayName = `${boobsOwner.get('firstName')} ${boobsOwner.get('lastName')}`;
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
                        <a className="profileLink" href="https://www.facebook.com/antonellargese">{boobsOwnerDisplayName}</a>
                      </span>
                    </span>
                  </span>
                </h5>
                <div className="_5pcp" id="js_x">
                  <span>
                    <span className="fsm fwn fcg">
                      <a className="_5pcq" href="https://www.facebook.com/photo.php?fbid=10206614469813558&amp;set=a.1918661799365.2106445.1026623821&amp;type=3" rel="theater" ajaxify="https://www.facebook.com/photo.php?fbid=10206614469813558&amp;set=a.1918661799365.2106445.1026623821&amp;type=3&amp;src=https%3A%2F%2Fscontent.xx.fbcdn.net%2Fhphotos-xpf1%2Fv%2Ft1.0-9%2F12042866_10206614469813558_6108645910945470171_n.jpg%3Foh%3D0d0c5ac3ef9c0fb719b0f3412103800a%26oe%3D569E00BC&amp;size=768%2C960&amp;source=12&amp;player_origin=newsfeed" target="">
                        <abbr title="Saturday, September 26, 2015 at 11:16am" data-utime="1443258984" data-shorten="1" className="_5ptz timestamp livetimestamp">7 hrs</abbr>
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

  class PostUserInfoBlock extends React.Component {
    render() {
      return (
        <div className="clearfix _5x46">
          <PostAvatar />
          <PostUserDisplayName />
        </div>
      );
    }
  }

  class PostImage extends React.Component {
    render() {
      return (
        <div className="_3x-2">
          <div data-ft="{&quot;tn&quot;:&quot;H&quot;}">
            <div className="mtm">
              <div className="_5cq3" data-ft="{&quot;tn&quot;:&quot;E&quot;}">
                <a className="_4-eo" href="https://www.facebook.com/photo.php?fbid=10206614469813558&amp;set=a.1918661799365.2106445.1026623821&amp;type=3" rel="theater">
                  <div className="uiScaledImageContainer _4-ep" style={{ width: '470px', height: 'auto'}}>
                    <img className="scaledImageFitWidth img" src={boobs.get('preview')} alt="Antonella Argese's photo." width="316" height="394" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  class PostInteractionsBox extends React.Component {
    render() {
      return (
        <div>
          <form rel="async" className="live_10207786688610957_316526391751760 commentable_item">
            <input type="hidden" name="charset_test" value="€,´,€,´,水,Д,Є" />
            <input type="hidden" name="fb_dtsg" value="AQHKnLAf4NHD" autoComplete="off" />
            <input type="hidden" autoComplete="off" name="feedback_params" />
            <input type="hidden" autoComplete="off" name="data_only_response" value="1" />
            <div className="_5pcp _5vsi _52i6 _4l4">
              <div className="_18--" />
              <div className="_4l5">
                <span>
                  <a className="UFILikeLink" href="#" role="button" aria-label="Like this" aria-live="polite" data-ft="{&quot;tn&quot;:&quot;>&quot;}" data-reactid=".51">
                  <i className="UFILikeLinkIcon img sp_D_dU4MeWsgM sx_99a985" data-reactid=".51.0" />
                    <span data-reactid=".51.1">Like</span>
                  </a>
                </span> &nbsp;
                <span>
                  <a className="comment_link" role="button" href="#" title="Leave a comment" data-ft="{ &quot;tn&quot;: &quot;S&quot;, &quot;type&quot;: 24 }" data-reactid=".52">
                    <i className="UFICommentLinkIcon img sp_D_dU4MeWsgM sx_708895" data-reactid=".52.0" />
                    <span data-reactid=".52.1">Comment</span>
                  </a>
                </span> &nbsp;
                <span className="share_root">
                  <a href="#" className="share_action_link" data-ft="{ &quot;tn&quot;: &quot;J&quot;, &quot;type&quot;: 25 }" title="Send this to friends or post it on your timeline." data-reactid=".53">
                    <i className="UFIShareLinkIcon img sp_D_dU4MeWsgM sx_8f7e65" data-reactid=".53.0" />
                    <span data-reactid=".53.1">Share</span>
                    <span className="UFIShareLinkSpinner img _55ym _55yn _55yo _5tqs" aria-label="Loading..." aria-busy="true" data-reactid=".53.2"></span>
                  </a>
                </span>
              </div>
            </div>
            <div className="uiUfi UFIContainer _5pc9 _5vsj _5v9k" data-images-lazy-loadable="1" id="u_jsonp_6_p">
              <ul className="UFIList" data-reactid=".54">
                <li className="UFIRow UFILikeSentence UFIFirstComponent" data-reactid=".54.1:1">
                  <div className="clearfix" data-reactid=".54.1:1.0">
                    <div className="_ohf rfloat" data-reactid=".54.1:1.0.$right"></div>
                    <div className="" data-reactid=".54.1:1.0.$left">
                      <div className="UFILikeSentenceText" data-reactid=".54.1:1.0.$left.0">
                        <span data-reactid=".54.1:1.0.$left.0.0">
                          <a data-testid="n_other_people_link" className="UFINoWrap" rel="dialog" ajaxify="/ajax/browser/dialog/likes?id=10207786688610957&amp;actorid=1406485212" href="/browse/likes?id=10207786688610957&amp;actorid=1406485212" data-hover="tooltip" data-tooltip-alignh="center" data-tooltip-uri="/ajax/like/tooltip.php?comment_fbid=10207786688610957&amp;comment_from=1353836137&amp;seen_user_fbids=true&amp;av=1353836137" role="button" data-reactid=".54.1:1.0.$left.0.0.$range0/=10">
                            6 people
                          </a>
                          <span data-reactid=".54.1:1.0.$left.0.0.1"> like this.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accessible_elem" data-reactid=".54.1:3">
                  <h6 data-reactid=".54.1:3.0">Comments</h6>
                </li>
                <li className=" UFIRow UFIComponent UFIAddComment UFIAddCommentWithPhotoAttacher UFILastComponent" data-ft="{&quot;tn&quot;:&quot;[&quot;}" data-reactid=".54.1:6">
                  <div className="UFIMentionsInputWrap UFIStickersEnabledInput clearfix" data-reactid=".54.1:6.0">
                    <div className="_ohe lfloat" data-reactid=".54.1:6.0.$left">
                      <div className="UFIReplyActorPhotoWrapper img _8o _8r UFIImageBlockImage" data-reactid=".54.1:6.0.$left.0">
                        <img alt="Andrea Ascari" className="img UFIActorImage _54ru img" src="https://scontent.xx.fbcdn.net/hprofile-xpf1/v/t1.0-1/p64x64/11855650_10207721655823423_5218536526796355396_n.jpg?oh=147090ba72bc2c5bd40c66f6656b5eb5&amp;oe=56ABA4BC" data-reactid=".54.1:6.0.$left.0.0" />
                      </div>
                    </div>
                  <div className="" data-reactid=".54.1:6.0.$right">
                    <div className="UFIImageBlockContent _42ef _8u" data-reactid=".54.1:6.0.$right.0">
                      <div className="UFICommentContainer" data-reactid=".54.1:6.0.$right.0.0">
                        <div className="UFIInputContainer" data-reactid=".54.1:6.0.$right.0.0.0">
                          <div>
                            <input className="_1osa mentionsHidden" name="add_comment_text" tabIndex="-1" />
                            <div className="UFIAddCommentInput _1osb _1osc">
                              Write a comment...
                            </div>
                          </div>
                          <div className="UFICommentAttachmentButtons clearfix">
                            <div className="UFIPhotoAttachLinkWrapper _m" data-hover="tooltip" data-tooltip-alignh="center" aria-label="Attach a Photo">
                              <i className="UFICommentPhotoIcon">
                                <input type="file" accept="image/*" className="_n" name="file" title="Attach a Photo" aria-label="Attach a Photo" />
                              </i>
                            </div>
                          <a aria-label="Post a sticker" className="UFICommentStickerButton" data-hover="tooltip" data-tooltip-alignh="center" href="#">
                            <div tabIndex="0" className="UFICommentStickerIcon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
      );
    }
  }


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
                          <PostUserInfoBlock />
                          <PostImage />
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
