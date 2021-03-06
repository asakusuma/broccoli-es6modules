(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('../something')) :
  typeof define === 'function' && define.amd ? define('inner/first', ['exports', 'something'], factory) :
  factory((global.inner/first = {}), global.Something)
}(this, function (exports, Something) { 'use strict';

  exports.meaningOfLife = meaningOfLife;
  exports.boom = boom;

  function meaningOfLife() {
    new Something['default']();
    throw new Error(42);
  }

  function boom() {
    throw new Error('boom');
  }

}));