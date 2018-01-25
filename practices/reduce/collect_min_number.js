'use strict';

function collect_min_number(collection) {
  var result = collection[0];
  for(var m =1;m<collection.length;m++)
  {
      if(collection[m]<result)
          result = collection[m];
  }
  return result;
}

module.exports = collect_min_number;

