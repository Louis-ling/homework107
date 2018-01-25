'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  var X;
  for(var m =0;m<collection.length-1;m++)
  {
      X = (collection[m]+collection[m+1])*3;
      result.push(X);
  }
  return result;
}
module.exports = one_add_next_multiply_three;
