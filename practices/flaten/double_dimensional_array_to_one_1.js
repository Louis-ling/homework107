'use strict';

function double_to_one(collection) {
  var result = [];
  for(var m =0;m<collection.length;m++)
  {
      if(typeof(collection[m].length)==='undefined')
      {
          result.push(collection[m]);
          continue;
      }
      for(var n = 0;n<collection[m].length;n++)
      {
          result.push(collection[m][n]);
      }
  }
  return result;
}

module.exports = double_to_one;
