'use strict';

function hybrid_operation_to_uneven(collection) {
  var result=[]
  var n
  for(var m =0;m<collection.length;m++)
  {
    if(collection[m]%2===1)
      {
      n = collection[m]*3+2;
      result.push(n)
      }
  }
  return result;
}


module.exports = hybrid_operation_to_uneven;

