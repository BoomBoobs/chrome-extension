import { Query, t } from 'revenge';

export default function(API) {

  const user = Query({
    id: 'user',
    cache: 'manual',
    cacheParams: {
      token: t.Str
    },
    fetch: () => () => Promise.resolve(API.getUser())
  });

  const boobsList = Query({
    id: 'boobsList',
    cache: 'manual',
    cacheParams: {},
    fetch: () => () => API.getBoobs()
  });

  const boobsOwners = Query({
    id: 'boobsOwners',
    cache: 'manual',
    cacheParams: {},
    fetch: () => () => API.getBoobsOwners()
  });


  return {
    user,
    boobsList,
    boobsOwners
  };
}
