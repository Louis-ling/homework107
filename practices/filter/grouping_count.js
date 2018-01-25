'use strict';

function grouping_count(collection) {
  var result = new Object();
  for(var m =0;m<collection.length;m++)
  {
      var n = collection[m].toString();
      var k = result[n];
      if(k===undefined)
      {
          result[n] = 1;
      }
      else
      {
          result[n] = k+1;
      }
  }
  console.log(result);
  return result;
}

module.exports = grouping_count;
