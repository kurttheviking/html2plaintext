var plumb = require('plumb')
var decode = require('htmldec')

var html2plaintext = plumb(
  collapseWhitespace,
  linebreaks,
  stripTags,
  decode,
  trim
)

function stripTags (str) {
  return str.replace(/<[^<]+>/g, '')
}

function collapseWhitespace (val) {
  val = val.replace(/\s+/g, ' ')
  return val
}

function linebreaks (str) {
  return str.replace(/<\s?(p|br)[^<]*>/gi, function (x, tag) {
    switch(tag.toLowerCase()){
      case 'p':
        return '\n\n'
      case 'br':
        return '\n'
    }
    return x
  })
}

function trim (str) {
  return str.trim()
}

module.exports = html2plaintext