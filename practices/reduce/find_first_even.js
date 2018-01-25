'use strict';

function find_first_even(collection) {
    for(var m=0;m<collection.length;m++)
    {
      if(collection[m]%2===0) 
      return collection[m]
    }
 }

module.exports = find_first_even;

