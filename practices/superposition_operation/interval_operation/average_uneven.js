'use strict';

function average_uneven(collection) {
  var result=0
  var sum=0
  var n=0
  for(var m=0;m<collection.length;m++)
  if(collection[m]%2===1)
    {
    sum+=collection[m]
    n=n+1
    }
    result=sum/n
    return result
  }
module.exports = average_uneven;
