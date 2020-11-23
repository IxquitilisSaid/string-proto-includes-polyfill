function CreateMethodProp(O, P, V) { // eslint-disable-line no-unused-vars
	var newDesc = {
		value: V,
		writable: true,
		enumerable: false,
		configurable: true
    };

	Object.defineProperty(O, P, newDesc);
}

CreateMethodProp(String.prototype, 'includes', function includes(searchString) {
	'use strict';
	var position = arguments.length > 1 ? arguments[1] : undefined;
	var O = RequireObjectCoercible(this);
	var S = ToString(O);
    var isRegExp = IsRegExp(searchString);

	if (isRegExp) {
		throw new TypeError('First argument to String.prototype.includes must not be a regular expression');
    }

	var searchStr = ToString(searchString);
	var pos = ToInteger(position);
	var len = S.length;
	var start = Math.min(Math.max(pos, 0), len);

	return String.prototype.indexOf.call(S, searchStr, start) !== -1;
});