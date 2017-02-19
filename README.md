# string-normalize-es6 [![Build Status](https://travis-ci.org/LasaleFamine/string-normalize-es6.svg?branch=master)](https://travis-ci.org/LasaleFamine/string-normalize-es6)

> Normalize string using ES6 String.Prototype.Normalize


## Install

```
$ yarn add string-normalize-es6
```


## Usage

```js
const stringNormalize = require('string-normalize-es6');

stringNormalize('Crème Brulée');
//=> 'Creme Brulee'

stringNormalize(123);
//=> null
```


## API

### stringNormalize(input)

#### input

Type: `string`

String you want to normalize to NFD.


## Contribute

The module is based on [this answer on Stackoverflow](http://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#answer-37511463).
I'm not completely sure the this is the correct implementation and maybe we can also specify the ***normalization*** type.


### Test

```sh
$ yarn test
```


## License

MIT © [LasaleFamine](https://godev.space)
