'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  for(var m =0;m<collections.length;m++)
  {
    var n = collections[m]*3;//三倍映射
    result.push(n);
  }
  return result;
}
module.exports = map_to_three_multiples;
