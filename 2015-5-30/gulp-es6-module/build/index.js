(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = (function () {
   function App() {
      _classCallCheck(this, App);

      console.log("App::constructor");
      this.init();
   }

   _createClass(App, [{
      key: "init",
      value: function init() {
         console.log("App::init");
      }
   }]);

   return App;
})();

module.exports = App;

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppJs = require('./App.js');

var _AppJs2 = _interopRequireDefault(_AppJs);

var app = new _AppJs2['default']();

},{"./App.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvcm9vdC9ndWxwLWJhYmVsL3NyYy9BcHAuanMiLCIvcm9vdC9ndWxwLWJhYmVsL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FNLEdBQUc7QUFFSyxZQUZSLEdBQUcsR0FFTzs0QkFGVixHQUFHOztBQUdILGFBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNoQyxVQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZDs7Z0JBTEUsR0FBRzs7YUFPRixnQkFBRTtBQUNILGdCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQzNCOzs7VUFURSxHQUFHOzs7QUFhVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7OztxQkNiTCxVQUFVOzs7O0FBRTFCLElBQUksR0FBRyxHQUFHLHdCQUFTLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQXBwIHtcblxuICAgY29uc3RydWN0b3IoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXBwOjpjb25zdHJ1Y3RvclwiKTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgfVxuXG4gICBpbml0KCl7XG4gICAgICBjb25zb2xlLmxvZyhcIkFwcDo6aW5pdFwiKTtcbiAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qcyc7XG5cbnZhciBhcHAgPSBuZXcgQXBwKCk7XG4iXX0=
