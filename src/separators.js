'use strict';

function thousands_separators(num) {
  var num_array = num.toString().split(".");
  num_array[0] = num_array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_array.join(".");
}

module.exports = thousands_separators;
