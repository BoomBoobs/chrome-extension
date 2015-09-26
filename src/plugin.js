
import window from 'window';
import React from 'react';
import { each, filter, first, pullAt, random, range, zip } from 'lodash';
import axios from 'axios';
import Parse from 'parse';
import BoobsPost from './BoobsPost';

Parse.initialize('hrb0yHVkItcCXaMJp6S90K8Uglb7TWPaiV2lrsKg', '5bYXE74sdRkVRaBYju1mV9zowGEWDUpsdGHmVhiG');
const API_URL = 'https://api.parse.com/1';

const document = window.document;
const console = window.console;

const boobsPostRatio = 2;

const buildUrl = (path) => {
  return `${API_URL}${path}`;
};



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
  // console.log('on scroll', previousFacebookPostsLength, getFacebookPostsLength());
  const facebookBoobsPostDelta = getFacebookPostsLength() - getBoobsPostsLength();
  // console.log('facebook posts', getFacebookPostsLength(), 'boobs posts', getBoobsPostsLength());
  if (previousFacebookPostsLength < getFacebookPostsLength() && facebookBoobsPostDelta >= boobsPostRatio) {
    // console.log('it\'s time to append boobs!');
    appendBoobs(facebookBoobsPostDelta);
    previousFacebookPostsLength = getFacebookPostsLength();
  } else {
    // console.log('wait to append boobs!');
  }
};


const appendBoobs = (facebookBoobsPostDelta) => {

  // topNewsContainer.removeEventListener('DOMNodeInserted', appendBoobs, false);

  // find random positions of timeline wrapper children

  // console.log('facebook posts count', previousFacebookPostsLength);
  const boobsPostsCount = Math.ceil(facebookBoobsPostDelta * boobsPostRatio);
  // console.log('boobs post to insert', boobsPostsCount);

  // pick random n° positions equal to boobsPostsCount from postBoxesLength
  const postsPositions = range(previousFacebookPostsLength, previousFacebookPostsLength + facebookBoobsPostDelta);
  // console.log('available positions for boobs posts', postsPositions);
  const randomPos = random(previousFacebookPostsLength, postsPositions.length - 1);
  // console.log({ randomPos });
  const boobsPostPositions = pullAt(postsPositions, randomPos);

  // console.log('positions for boobs posts', boobsPostPositions);


  // insert a boobs-box in each positions

  Parse.Cloud.run('random', {}, {
    success: function(boobs) {
      // ratings should be 4.5
      const preview = boobs.get('preview');

      topNewsContainer.insertBefore(BoobsPost(boobs), getFacebookPosts()[boobsPostPositions]);
    },
    error: function(error) {
    }
  });

};

document.addEventListener('scroll', readyToAttachBoobsOnScroll);
