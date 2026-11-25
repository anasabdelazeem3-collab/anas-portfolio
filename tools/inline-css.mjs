// Copies styles.css into index.html (between the INLINE-CSS markers) so the page is styled even in
// in-app / "lite" browsers that fail to fetch a separate stylesheet. Run after editing styles.css:
//   node tools/inline-css.mjs
import fs from 'fs';
const css = fs.readFileSync('styles.css', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');
const block = `<!--INLINE-CSS-START--><style>${css}</style><!--INLINE-CSS-END-->`;
if (html.includes('<!--INLINE-CSS-START-->')) html = html.replace(/<!--INLINE-CSS-START-->[\s\S]*?<!--INLINE-CSS-END-->/, block);
else html = html.replace('<link rel="stylesheet" href="styles.css">', block);
fs.writeFileSync('index.html', html);
console.log('inlined', css.length, 'chars of CSS');
