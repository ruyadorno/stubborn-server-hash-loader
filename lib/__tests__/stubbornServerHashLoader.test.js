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
      'tests/foo/bar/get-762a60b4f3d747d9376f627e0506234f6bbb0c611a911c4451f6a1f636e53e0f'
    );
  });
});
