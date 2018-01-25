'use strict';

function amount_even(collection) {
  var sum=0
  for(var m =0;m<collection.length;m++)
  {
    if(collection[m]%2===0)
      {
      sum+=collection[m]
      }
  }
  return sum;
}
module.exports = amount_even;
