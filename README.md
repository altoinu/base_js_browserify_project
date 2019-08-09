Initial set up
- npm install
- bower install (or npm run bower install)

run this to compile js and doc
- npm run build<br/>
   - outputs to dist/[output file].js, dist/[output file].min.js
   - outputs documentation to dist/jsdoc

run this to compile only jsdoc
- npm run build:doc:jsdoc<br/>
   - outpus to dist/jsdoc
- jsdoc
   - https://www.npmjs.com/package/jsdoc
   - https://jsdoc.app/
      - https://jsdoc.app/about-getting-started.html
      - https://jsdoc.app/tags-example.html
      - Namepaths https://jsdoc.app/about-namepaths.html
      - Namespace https://jsdoc.app/tags-namespace.html
         - memberof https://jsdoc.app/tags-memberof.html
      - Module https://jsdoc.app/tags-module.html
         - param https://jsdoc.app/tags-param.html
         - Function https://jsdoc.app/tags-function.html
         - Class https://jsdoc.app/tags-class.html

TODO: ?
package.json- build:js:collapse
This breaks browserify . -s [output object] so it won't be available
on window object

Some random notes

browserify -s ReplaceMeWithObjectName ...
-> exports to window.ReplaceMeWithObjectName

browserify -r ./src/BLAH.js:ReplaceMeWithRequireName ...
-> enables 'require'
<script src="js/BLAH.js"></script>
<script>
var moduleObj = require('ReplaceMeWithRequireName');
console.log('---', moduleObj);
</script>
