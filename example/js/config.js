require.config({
  // baseUrl: 'js',
  paths: {
    ReplaceMeWithObjectName: "../../dist/index",
    // TODO: Not sure if we could use jquery specified through requirejs inside browserify
    //jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min',
  },
  /*
  shim: {
    CPTracker: ["jquery"],
  },
  map: {
    //https://requirejs.org/docs/jquery.html#noconflictmap
    //https://api.jquery.com/jquery.noconflict/
    // '*' means all modules will get 'jquery-private'
    // for their 'jquery' dependency.
    "*": {
      jquery: "jquery-private",
    },
    // 'jquery-private' wants the real jQuery module
    // though. If this line was not here, there would
    // be an unresolvable cyclic dependency.
    "jquery-private": {
      jquery: "jquery",
    },
  },
  */
  packages: [],
  //deps: ["app"],
});

//and the 'jquery-private' module
define("jquery-private", ["jquery"], function ($) {
  console.log("jquery-private--, loaded config specified $", $.fn.jquery, $);

  $.noConflict(true);
  return $;
});
console.log(
  "jquery-private-- outside, global $",
  window.$ ? $.fn.jquery : null,
  window.$ ? $ : null,
);
