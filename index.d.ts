/**

@param html - html to convert to plain text, can include tags

@example
```
import h2p from 'html2plaintext'

h2p('<p>Hello,\n   &amp; <em>how  are <a href="https://me.com">you</a>?</em></p>')
// => "Hello, & how are you?"

```
*/
export default function html2plaintext(html: string): string;
