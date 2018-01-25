'use strict';

function spilt_to_zero(number, interval) {
  var result =[];
  var m=number;
  result.push(m);
  for(;number>0;)
      {
      number = number-interval;
      m=parseFloat(number).toFixed(1)
      number=parseFloat(m)
      result.push(number);
      }
  return result;
}

module.exports = spilt_to_zero;
