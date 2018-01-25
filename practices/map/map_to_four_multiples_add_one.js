'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = [];
  for(var m =0;m<collection.length;m++)
  {
    var n = collection[m]*4+1;//四倍加一映射
    result.push(n);
  }
  return result;
}
module.exports = map_to_four_multiples_add_one;
