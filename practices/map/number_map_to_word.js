'use strict';
var number_map_to_word = function(collection){
  var result = [];
  for(var m =0;m<collection.length;m++)
    result.push(String.fromCharCode(96+collection[m]))
  return result;
}
module.exports = number_map_to_word;
