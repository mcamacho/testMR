require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ListScope":[function(require,module,exports){
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
},{}]},{},[]);
