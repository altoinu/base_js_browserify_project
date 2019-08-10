/**
 * Sample module with class
 * @module SampleModule
 * @version 0.0.0 2019/08/10
 * @requires something
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
 * <!-- via require() -->
 * <script src="index.js"></script>
 * <script>
 * var ReplaceMeWithObjectName = require('index.js');
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

	// --------------------------------------------------------------------------
	//
	// public properties
	//
	// --------------------------------------------------------------------------

	this.data = 'hello';

	this.text = text;

	this.text2 = text2 ? text2 : 'good bye';

	// --------------------------------------------------------------------------
	//
	// private functions
	//
	// --------------------------------------------------------------------------

	function sayItNow(name) {

		alert(this.data + ' ' + name + '!');

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