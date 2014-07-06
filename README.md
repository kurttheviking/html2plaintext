html2plaintext
==============

Convert html-formatted text to plaintext

- strip tags
- reformat ordered/unordered lists
- treat whitespace like a browser
- decode html entities


### Use

    var h2p = require('html2plaintext')

     h2p('<p>Hello,\n   &amp; <em>how  are you?</em></p>')
    // => "Hello, & how are you?"


### Install

    $ npm install html2plaintext


### Test

From project root:

    $ npm install
    $ npm test
