'use strict';

function collect_max_number(collection) {
  var result = collection[0];
  for(var m =1;m<collection.length;m++)
  {
      if(collection[m]>result)
          result = collection[m];
  }
  return result;
}
module.exports = collect_max_number;
