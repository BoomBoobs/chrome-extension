export default function patchReactRouter(router) {

  // ~ same as transitionTo
  // but instead of substituting completely state, params and query,
  // it patches them using current versions as base
  // (similar in spirit to what React.setState does)

  const makeArgs = function(state, params, query) {
    const ps = {
      ...router.getCurrentParams(),
      ...(params || {})
    };
    const q = {
      ...router.getCurrentQuery(),
      ...(query || {})
    };
    const routes = router.getCurrentRoutes();
    const s = state || routes[routes.length - 1].name;

    return { ps, q, s };
  };

  router.transitionToPatch = function(state, params, query) {
    const { ps, q, s } = makeArgs(state, params, query);
    return router.transitionTo(s, ps, q);
  };

  router.makeHrefPatch = function(state, params, query) {
    const { ps, q, s } = makeArgs(state, params, query);
    return router.makeHref(s, ps, q);
  }

  return router;
}
