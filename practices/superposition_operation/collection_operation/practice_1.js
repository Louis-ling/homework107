'use strict';

function hybrid_operation(collection) {
  var sum = 0
  for(var m =0;m<collection.length;m++)
  {
    var n = collection[m]*3+2;
    sum+=n
  }
  return sum;
}

module.exports = hybrid_operation;

