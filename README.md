## Writing README stuff
[https://help.github.com/en/articles/basic-writing-and-formatting-syntax](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)

## Required stuff
- Node.js and npm [https://nodejs.org/](https://nodejs.org/)
- Yarn [https://yarnpkg.com/](https://yarnpkg.com/)

### Notes on bower
[https://bower.io/blog/2017/how-to-migrate-away-from-bower/](https://bower.io/blog/2017/how-to-migrate-away-from-bower/)<br/>
may want to clean out bower stuff eventually

## Initial set up
```
yarn install
```

## run this to compile js and doc
```
yarn run build
or
npm run build
```
- outputs to dist/[output file].js, dist/[output file].min.js
- outputs documentation to dist/jsdoc

## run this to compile only jsdoc
```
npm run build:doc:jsdoc
```
- outputs to dist/jsdoc
- jsdoc notes
    - [https://www.npmjs.com/package/jsdoc](https://www.npmjs.com/package/jsdoc)
    - [https://jsdoc.app/](https://jsdoc.app/)
        - [Getting started](https://jsdoc.app/about-getting-started.html)
        - [tags](https://jsdoc.app/tags-example.html)
        - [Namepaths](https://jsdoc.app/about-namepaths.html)
        - [Namespace](https://jsdoc.app/tags-namespace.html)
            - [memberof](https://jsdoc.app/tags-memberof.html)
        - [Module](https://jsdoc.app/tags-module.html)
            - [param](https://jsdoc.app/tags-param.html)
            - [Function](https://jsdoc.app/tags-function.html)
            - [Class](https://jsdoc.app/tags-class.html)

## TODO: ?
- package.json- build:js:collapse
    - This breaks browserify . -s [output object] so it won't be available on window object

## Some random notes
[https://help.github.com/en/articles/basic-writing-and-formatting-syntax](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)

```
browserify -s ReplaceMeWithObjectName ...
-> exports to window.ReplaceMeWithObjectName
```

```
browserify -r ./src/BLAH.js:ReplaceMeWithRequireName ...
-> enables 'require'

<script src="js/BLAH.js"></script>
<script>
var moduleObj = require('ReplaceMeWithRequireName');
console.log('---', moduleObj);
</script>
```
