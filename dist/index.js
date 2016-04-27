'use strict';

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('dropped outa school now we done rich');

_shelljs2.default.exec(process.argv[2]);
var repeat = setInterval(function () {
  _shelljs2.default.exec("clear");
  _shelljs2.default.exec(process.argv[2]);
}, process.argv[3]);