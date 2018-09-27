'use strict';

const { join } = require('path');
const { parse } = require('url');

const requestHash = require('request-hash');

module.exports = function(opts) {
  const hash = requestHash(opts);

  const hashLoader = function(req, stub, __require) {
    const { pathToMocks } = stub;
    const { pathname } = parse(req.url);

    __require = __require || require;

    let file = join(
      pathToMocks,
      pathname,
      req.method.toLowerCase() + '-' + hash(req)
    );

    let resolved = __require.resolve(file);
    delete __require.cache[resolved];

    return __require(file);
  };

  return hashLoader;
};
