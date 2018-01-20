(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _scriptsUtils = require('./scripts/utils');

var _scriptsUtils2 = _interopRequireDefault(_scriptsUtils);

var output = _scriptsUtils2['default'].getUpperCase('Working!!!');
console.log(output);

},{"./scripts/utils":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function getUtils() {

  var publicAPI = {
    getUpperCase: getUpperCase
  };

  return publicAPI;

  // **************************

  function getUpperCase(word) {
    return word.toUpperCase();
  }
})();

module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9TaXRlcy9TaWRlIFByb2plY3RzL0ZDQy9XaWtpcGVkaWEtVmlld2VyL2FwcC9tYWluLmpzIiwiQzovU2l0ZXMvU2lkZSBQcm9qZWN0cy9GQ0MvV2lraXBlZGlhLVZpZXdlci9hcHAvc2NyaXB0cy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7NEJDQWtCLGlCQUFpQjs7OztBQUVuQyxJQUFNLE1BQU0sR0FBRywwQkFBTSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7O3FCQ0hKLENBQUEsU0FBUyxRQUFRLEdBQUc7O0FBRWxDLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLGdCQUFZLEVBQUUsWUFBWTtHQUMzQixDQUFDOztBQUVGLFNBQU8sU0FBUyxDQUFDOzs7O0FBSWpCLFdBQVMsWUFBWSxDQUFDLElBQUksRUFBRTtBQUMxQixXQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztHQUMzQjtDQUNGLENBQUEsRUFBRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi9zY3JpcHRzL3V0aWxzJztcblxuY29uc3Qgb3V0cHV0ID0gVXRpbHMuZ2V0VXBwZXJDYXNlKCdXb3JraW5nISEhJyk7XG5jb25zb2xlLmxvZyhvdXRwdXQpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGdldFV0aWxzKCkge1xyXG5cclxuICBjb25zdCBwdWJsaWNBUEkgPSB7XHJcbiAgICBnZXRVcHBlckNhc2U6IGdldFVwcGVyQ2FzZVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBwdWJsaWNBUEk7XHJcblxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIGZ1bmN0aW9uIGdldFVwcGVyQ2FzZSh3b3JkKSB7XHJcbiAgICByZXR1cm4gd29yZC50b1VwcGVyQ2FzZSgpO1xyXG4gIH1cclxufSgpKVxyXG4iXX0=
