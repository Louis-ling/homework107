'use strict';

function calculate_elements_sum(collection) {
  var sum=0
  for(var m=0;m<collection.length;m++)
    {
    sum+=collection[m]
    }
    return sum
  }

module.exports = calculate_elements_sum;

