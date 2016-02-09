import { Command } from 'revenge';

export default function(API, { boobsOwners }) {

  const doCreateBoobsPost = ({ boobsFile, boobsOwnerId }) => Command({
    invalidates: { boobsOwners },
    run: () => API.createBoobsPost(boobsOwnerId, boobsFile)
  });


  return {
    doCreateBoobsPost
  };
}
