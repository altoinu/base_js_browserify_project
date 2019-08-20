/**
 * Sample module with class
 * @module SampleModule
 * @version 0.0.0 2019/08/10
 * @requires something
 * @see This really cool link {@link https://www.google.com}
 * 
 * @example
 * <!--
 * ReplaceMeWithObjectName - name specified via -s option in package.json script 'build:js:browserify'
 * -->
 * 
 * <!-- available as global object -->
 * <script src="index.js"></script>
 * <script>
 * new ReplaceMeWithObjectName('text to', 'set');
 * </script>
 * 
 * <!-- via requirejs -->
 * <script>
 * var require = {
 *    baseUrl: 'js/'
 * };
 * </script>
 * <script src=".../requirejs/2.3.6/require.js"></script>
 * <script>
 *    // load core library
 *    require([
 *       'config'
 *    ], function() {
 *       
 *       require([
 *          'ReplaceMeWithObjectName'
 *       ], function(ReplaceMeWithObjectName) {
 *          
 *          new ReplaceMeWithObjectName();
 *          
 *       });
 *       
 *    });
 * </script>
 * 
 * @todo bundle.require (browserify -r option)
 * <!-- via require() -->
 * <script src="index.js"></script>
 * <script>
 * var ReplaceMeWithObjectName = require('index.js');
 * new ReplaceMeWithObjectName('text to', 'set');
 * </script>
 */

/**
 * Sample class
 * @class
 * @classdesc Sample class description here
 * 
 * @param {string} text
 * @param {string} [text2]
 * 
 * @property {string} data='hello' description for data
 * @property {string} text this description
 * @property {string} [text2='good bye'] next description
 */
function MainClass(text, text2) {

	var me = this;

	// --------------------------------------------------------------------------
	//
	// public properties
	//
	// --------------------------------------------------------------------------

	/**
	 * Some data.
	 * @type {string}
	 * @default 'hello'
	 */
	this.data = 'hello';

	/**
	 * Another data.
	 * @type {Object}
	 */
	this.text = text;

	/**
	 * Yet another data.
	 * @type {Object}
	 * @default 'good bye'
	 */
	this.text2 = text2 ? text2 : 'good bye';

	// --------------------------------------------------------------------------
	//
	// private functions
	//
	// --------------------------------------------------------------------------

	function sayItNow(name) {

		alert(me.data + ' ' + name + '!');

	}

	// --------------------------------------------------------------------------
	//
	// public methods
	//
	// --------------------------------------------------------------------------

	/**
	 * Alerts message with this.data and specified name.
	 * @param {string} name Name to alert.
	 * @returns {string} 'asdf' as example.
	 */
	this.sayHello = function(name) {

		sayItNow(name);

		return 'asdf';

	};

}

module.exports = MainClass;