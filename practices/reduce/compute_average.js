'use strict';

function compute_average(collection) {
var result=0
var sum=0
for(var m=0;m<collection.length;m++)
  {
  sum+=collection[m]
  }
  result=sum/collection.length
  return result
}

module.exports = compute_average;

