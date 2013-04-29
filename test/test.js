var chai = require('chai')
chai.should()
var heredoc = require('heredoc')
var h2p = require('../index')

describe('html2plaintext', function () {
  it('strips html tags', function () {

    h2p('<b>HELLO <blink>world</blink></b>')
      .should.equal('HELLO world')

  })
  it('treats whitespace like a browser - trim', function () {
    h2p('<b>Hey there, Jon</b>  \n')
      .should.equal('Hey there, Jon')
  })
  it('treats whitespace like a browser - collapse repeated space', function () {

    h2p('<h1>It is  aa maaaa   zzzzz       ing!</h1>')
      .should.equal('It is aa maaaa zzzzz ing!')

  })
  it('ignores linebreaks', function () {
    h2p('hi\n\n\n\n<b>foo</b>\n')
      .should.equal('hi foo')
  })
  it('ignores single linebreaks', function () {
    h2p('hi\nii')
      .should.equal('hi ii')
  })
  it('inserts 2 linebreaks after </p>', function () {
    h2p('<p>it was the best of times</p><p>it was the worst of times</p>')
      .should.equal('it was the best of times\n\nit was the worst of times')
  })
  it('inserts 1 linebreak <br>', function () {
    h2p('hello<br/>goodbye')
      .should.equal('hello\ngoodbye')
  })
  it('decodes html entities', function () {
    h2p('&lt;3 &amp; &lt;/3')
      .should.equal('<3 & </3')
  })
})