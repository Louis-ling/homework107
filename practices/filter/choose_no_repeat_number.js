'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  for(var m= 0;m<collection.length;m++)
  {
    if(result.indexOf(collection[m])===-1)
    {
      result.push(collection[m]);
    }
  }
  return result;
}


module.exports = choose_no_repeat_number;
