var cheerio = require('cheerio');
var decode = require('he').decode;
var plumb = require('plumb');


// "private" helper for list processing into plaintext
function _list (str, isOrdered) {
  if (!str) return str;

  var $ = cheerio.load(str);
  var listEl = isOrdered ? 'ol' : 'ul';

  $(listEl).each(function (i, el) {
    var $out = cheerio.load('<p></p>');
    var $el = $(el);

    $el.find('li').each(function (j, li) {
      var tick = isOrdered ? String(j + 1) + '.' : '-';

      $out('p').append(tick + ' ' + $(li).text() + '<br />');
    });

    // avoid excess spacing coming off last element
    // (we are wrapping with a <p> anyway)
    $out('br').last().remove();

    $el.replaceWith($out.html());
  });

  return $.html();
}

function stringify(x) {
  return x ? x.toString() : '';
}

function collapseWhitespace (val) {
  val = val.replace(/\s+/g, ' ');

  return val;
}

function linebreaks (str) {
  return str.replace(/<\s?(p|br)[^<]*>/gi, function (x, tag) {
    switch (tag.toLowerCase()) {
      case 'p':
        return '\n\n';
      case 'br':
        return '\n';
    }

    return x;
  });
}

function listOrdered (str) {
  return _list(str, true);
}

function listUnordered (str) {
  return _list(str, false);
}

function stripTags (str) {
  return str.replace(/<[^<]+>/g, '');
}

function trim (str) {
  return str.trim();
}

module.exports = plumb(
  listOrdered,
  listUnordered,
  stringify,
  collapseWhitespace,
  linebreaks,
  stripTags,
  decode,
  trim
);
