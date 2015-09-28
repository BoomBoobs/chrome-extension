require('./manifest.json');
require('./popup.html');
require('./icon.jpg');
require('./background.js');
require('!file?name=styles/facebook.css!less!./styles/facebook.less');


import window from 'window';
import React from 'react';
import { each, filter, first, pullAt, random, range, zip } from 'lodash';
import axios from 'axios';
import Parse from 'parse';
import BoobsPost from './BoobsPost/BoobsPost';

const API_URL = 'https://api.parse.com/4';

const document = window.document;
const console = window.console;

const boobsPostRatio = 2;

const buildUrl = (path) => {
  return `${API_URL}${path}`;
};


const startToAddBoobsPost = (user) => {

  // get timeline wrapper
  const topNewsMainStream = document.querySelector('[id^=\'topnews_main_stream\']');
  const topNewsContainer = first(topNewsMainStream.childNodes);
  const allPosts = topNewsContainer.childNodes;
  const getFacebookPosts = () => filter(allPosts, fp => fp.className === '_4ikz');
  const getFacebookPostsLength = () => getFacebookPosts().length;
  const getBoobsPosts = () => filter(allPosts, bp =>  bp.className === '_4ikz boobs');
  const getBoobsPostsLength = () => getBoobsPosts().length;

  let previousFacebookPostsLength = getFacebookPostsLength();

  const readyToAttachBoobsOnScroll = (event) => {
    const facebookBoobsPostDelta = getFacebookPostsLength() - getBoobsPostsLength();

    if (previousFacebookPostsLength < getFacebookPostsLength() && facebookBoobsPostDelta >= boobsPostRatio) {
      appendBoobs(facebookBoobsPostDelta);
      previousFacebookPostsLength = getFacebookPostsLength();
    } else {
      // console.log('wait to append boobs!');
    }
  };

  let boobsIds = [];

  const appendBoobs = (facebookBoobsPostDelta) => {

    // find random positions of timeline wrapper children
    const boobsPostsCount = Math.ceil(facebookBoobsPostDelta * boobsPostRatio);

    // pick random n° positions equal to boobsPostsCount from postBoxesLength
    const postsPositions = range(previousFacebookPostsLength, previousFacebookPostsLength + facebookBoobsPostDelta);
    const randomPos = random(previousFacebookPostsLength, postsPositions.length - 1);
    const boobsPostPositions = pullAt(postsPositions, randomPos);

    Parse.Cloud.run('random', { notIn: boobsIds }, {
      success: function(boobs) {
        topNewsContainer.insertBefore(BoobsPost(boobs), getFacebookPosts()[boobsPostPositions]);
        boobsIds.push(boobs.id);
      },
      error: function(error) {}
    });

  };

  document.addEventListener('scroll', readyToAttachBoobsOnScroll);
};

Parse.initialize('hrb0yHVkItcCXaMJp6S90K8Uglb7TWPaiV2lrsKg', '5bYXE74sdRkVRaBYju1mV9zowGEWDUpsdGHmVhiG');

Parse.User.logIn('BoomBoobs', 'BoomBoobs', {
  error: (err) => {
    console.log(err);
  },
  success: startToAddBoobsPost
});
