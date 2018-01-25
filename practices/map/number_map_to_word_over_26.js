'use strict';
var number_map_to_word_over_26 = function(collection){
  var result = [];
  for(var m =0;m<collection.length;m++)
    {
    if(collection[m]<=26)
    result.push(String.fromCharCode(96+collection[m]))
    if(collection[m]>26)
    result.push("a"+String.fromCharCode(96+collection[m]-26))
    }
  return result;

};
module.exports = number_map_to_word_over_26;
