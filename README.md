html2plaintext
==============

Convert html-formatted text to plaintext

- strip tags
- reformat ordered/unordered lists
- treat whitespace like a browser
- decode html entities


### Use

```js
var h2p = require('html2plaintext')

h2p('<p>Hello,\n   &amp; <em>how  are <a href="https://me.com">you</a>?</em></p>')
// => "Hello, & how are you?"
```

### Install

```sh
npm install html2plaintext
```

### Test

```sh
npm install
npm test
```
