Initial set up
- npm install
- bower install (or npm run bower install)

run this to compile js
- npm run build -> dist/[output file].js, dist/[output file].min.js

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
