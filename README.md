# stubborn-server-hash-loader

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage percentage][coveralls-image]][coveralls-url]

> Loader plugin for stubborn-server

## About

[stubborn-server](https://github.com/zeachco/stubborn-server) is a lightweight mock/stubbing server based upon [express](http://expressjs.com/).

**stubborn-server-hash-loader** is a plugin that provides a custom loader that tries to load files using a hash value which is generated by hashing the original request using [request-hash](https://github.com/ruyadorno/request-hash).

## Installation

```sh
$ npm install --save stubborn-server-hash-loader
```

## Usage

```js
const stubbornServer = require('stubborn-server');
const stub = stubbornServer();
const hashLoader = require('stubborn-server-hash-loader');

stub.start({
  plugins: [
    {
      loader: hashLoader({
        // config options
      })
    }
  ]
});
```

## License

MIT © [Ruy Adorno](http://ruyadorno.com)


[npm-image]: https://badge.fury.io/js/stubborn-server-hash-loader.svg
[npm-url]: https://npmjs.org/package/stubborn-server-hash-loader
[travis-image]: https://travis-ci.org/ruyadorno/stubborn-server-hash-loader.svg?branch=master
[travis-url]: https://travis-ci.org/ruyadorno/stubborn-server-hash-loader
[coveralls-image]: https://coveralls.io/repos/ruyadorno/stubborn-server-hash-loader/badge.svg
[coveralls-url]: https://coveralls.io/r/ruyadorno/stubborn-server-hash-loader
