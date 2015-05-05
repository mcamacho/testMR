// Class module, create a list based on an array
/* globals $ */

(function() {
	"use strict";

	var ListScope = module.exports = function ListScope(domElement) {
		this._$element = $(domElement);
	};

	ListScope.prototype.init = function(largs) {
		var self = this, larray = largs.larray;
		$.each(larray, function (index, content) {
		  createlist.call(self, largs, index, content);
		});
	};

	function createlist(largs, index, content) {
		var $element = this._$element,
		  ntag = document.createElement(largs.ltag);
		$(ntag).text(content);
		if (largs.lclass) $(ntag).addClass(largs.lclass);
		$element.append(ntag);
	}

}());