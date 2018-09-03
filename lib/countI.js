'use strict';

let i = 0;

exports.countI = function() {
  i++;
  return i.toString();
}