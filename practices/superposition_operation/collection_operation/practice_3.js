'use strict';

function hybrid_operation_to_uneven(collection) {
  var sum=0
  var n
  for(var m =0;m<collection.length;m++)
  {
    if(collection[m]%2===1)
      {
      n = collection[m]*3+5;
      sum+=n
      }
  }
  return sum;
}
module.exports = hybrid_operation_to_uneven;

