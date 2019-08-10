/**
 * Sample module with class
 * @module SampleModule
 * @version 0.0.0 2019/08/10
 * @requires something
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
 * 
 * @example
 * var MainClass = require('index.js');
 * new MainClass('text to', 'set');
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