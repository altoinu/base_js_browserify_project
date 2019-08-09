/**
 * Sample class
 * @class
 * @classdesc Sample class description here
 * @param {string} text
 * @param {string} [text2]
 */
function MainClass(text, text2) {

	// --------------------------------------------------------------------------
	//
	// public properties
	//
	// --------------------------------------------------------------------------

	this.data = 'hello';

	this.text = text;

	/**
	 * @default 'good bye'
	 */
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