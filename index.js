var plumb = require('plumb')
var decode = require('he').decode

var html2plaintext = plumb(
  stringify,
  collapseWhitespace,
  linebreaks,
  stripTags,
  decode,
  trim
)


function stringify(x) {
  return x ? x.toString()
           : ''
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

function stripTags (str) {
  return str.replace(/<[^<]+>/g, '')
}

function trim (str) {
  return str.trim()
}

module.exports = html2plaintext