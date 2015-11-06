require('../manifest.json');
require('../icon.jpg');
require('!file?name=plugin/styles/facebook.css!less!./styles/facebook.less');


import window from 'window';
import { filter, first, pullAt, random, range } from 'lodash';
import Parse from 'parse';
import BoobsPost from './BoobsPost/BoobsPost';


const document = window.document;

const boobsPostRatio = 2;


const startToAddBoobsPost = () => {

  // get timeline wrapper
  const topNewsMainStream = document.querySelector('[id^=\'topnews_main_stream\']');
  const topNewsContainer = first(topNewsMainStream.childNodes);
  const allPosts = topNewsContainer.childNodes;
  const getFacebookPosts = () => filter(allPosts, fp => fp.className === '_4ikz');
  const getFacebookPostsLength = () => getFacebookPosts().length;
  const getBoobsPosts = () => filter(allPosts, bp =>  bp.className === '_4ikz boobs');
  const getBoobsPostsLength = () => getBoobsPosts().length;

  let previousFacebookPostsLength = getFacebookPostsLength();

  const readyToAttachBoobsOnScroll = () => {
    const facebookBoobsPostDelta = getFacebookPostsLength() - getBoobsPostsLength();

    if (previousFacebookPostsLength < getFacebookPostsLength() && facebookBoobsPostDelta >= boobsPostRatio) {
      appendBoobs(facebookBoobsPostDelta);
      previousFacebookPostsLength = getFacebookPostsLength();
    }
  };

  let boobsIds = [];

  const appendBoobs = (facebookBoobsPostDelta) => {

    // find random positions of timeline wrapper children
    // const boobsPostsCount = Math.ceil(facebookBoobsPostDelta * boobsPostRatio);

    // pick random n° positions equal to boobsPostsCount from postBoxesLength
    const postsPositions = range(previousFacebookPostsLength, previousFacebookPostsLength + facebookBoobsPostDelta);
    const randomPos = random(previousFacebookPostsLength, postsPositions.length - 1);
    const boobsPostPositions = pullAt(postsPositions, randomPos);

    Parse.Cloud.run('random', { notIn: boobsIds }, {
      success: (boobs) => {
        topNewsContainer.insertBefore(BoobsPost(boobs), getFacebookPosts()[boobsPostPositions]);
        boobsIds.push(boobs.id);
      },
      error: () => {}
    });

  };

  document.addEventListener('scroll', readyToAttachBoobsOnScroll);
};

Parse.initialize('hrb0yHVkItcCXaMJp6S90K8Uglb7TWPaiV2lrsKg', '5bYXE74sdRkVRaBYju1mV9zowGEWDUpsdGHmVhiG');
if (Parse.User.current()) {
  Parse.User.logOut();
}
Parse.User.logIn('BoomBoobsPostCreator', 'BoomBoobsPostCreator', startToAddBoobsPost);
