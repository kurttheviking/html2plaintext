# html2plaintext
convert html-formatted text to plaintext

- strip tags
- treat whitespace like a browser
- decode html entities

## usage

    var h2p = require('html2plaintext')

     h2p('<p>Hello,\n   &amp; <em>how  are you?</em></p>')
    // => "Hello, & how are you?"

## installation

    $ npm install html2plaintext

## running the tests

From project root:

    $ npm install
    $ npm test

## contributors

jden <jason@denizac.org>

## license

MIT (c) 2013 Agile Diagnosis <hello@agilediagnosis.com>