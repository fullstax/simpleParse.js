"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getURLParams = getURLParams;
function getURLParams() {
	var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

	return url;
}
