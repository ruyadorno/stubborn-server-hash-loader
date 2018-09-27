const hashLoader = require('../');

describe('hashLoader', () => {
  it('should be able to require correct file name from a request', () => {
    const mock = () => null;
    const __require = jest.fn(mock);
    __require.resolve = a => a;
    __require.cache = {};
    hashLoader()(
      {
        url: 'https://example.com/foo/bar?lorem=ipsum',
        body: {
          foo: 'bar'
        },
        method: 'GET'
      },
      { pathToMocks: './tests' },
      __require
    );
    expect(__require).toHaveBeenCalledWith(
      'tests/foo/bar/get-d8f73ee8323ca662e5d280218bf9d61ce05bcc913f7b194ef1a178f010bcf286'
    );
  });
});
