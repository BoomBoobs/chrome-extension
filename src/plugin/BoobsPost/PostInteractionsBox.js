import React from 'react';

export default class PostInteractionsBox extends React.Component {
  render() {
    return (
      <div>
        <form rel="async" className="commentable_item" method="post" data-ft="{&quot;tn&quot;:&quot;]&quot;}" action="/ajax/ufi/modify.php" id="u_jsonp_3_k" onSubmit="return window.Event &amp;&amp; Event.__inlineSubmit &amp;&amp; Event.__inlineSubmit(this,event)">
          <input type="hidden" name="charset_test" value="€,´,€,´,水,Д,Є" />
          <input type="hidden" name="fb_dtsg" value="AQFO_eaAoDoL:AQFXIuCD3ga1" autoComplete="off" />
          <input type="hidden" autoComplete="off" name="ft_ent_identifier" value="10208811234786987" />
          <input type="hidden" autoComplete="off" name="data_only_response" value="1" />
          <div className="_sa_ _5vsi">
            <div className="_37uu">
              <div data-reactroot="">
                <div className="_3399 _a7s">
                  <div className="_524d">
                    <div className="_42nr">
                      <span>
                        <a className="_48-k UFILikeLink" data-testid="fb-ufi-likelink" href="#" role="button" aria-label="Like this" aria-live="polite" data-ft="{&quot;tn&quot;:&quot;>&quot;}">Like</a>
                      </span>
                      <span>
                        <a className="comment_link _5yxe" role="button" href="#" title="Leave a comment" data-ft="{ &quot;tn&quot;: &quot;S&quot;, &quot;type&quot;: 24 }">Comment</a>
                      </span>
                      <span>
                        <a href="#" className="share_action_link _5f9b" data-ft="{ &quot;tn&quot;: &quot;J&quot;, &quot;type&quot;: 25 }" title="Send this to friends or post it on your timeline."><span>Share</span><span className="UFIShareLinkSpinner _1wfk img _55ym _55yn _55yo _5tqs" aria-label="Loading..." aria-busy="true"></span></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
