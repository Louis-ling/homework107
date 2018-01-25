'use strict';
function map_to_even(collection){
  var result = [];
  for(var m =0;m<collection.length;m++)
  {
    var n = collection[m]*2;//双倍映射
    result.push(n);
  }
  return result;
}
module.exports = map_to_even;
