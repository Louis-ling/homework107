'use strict';

function find_last_even(collection) {
  for(var m=collection.length;m>0;m--)
  {
    if(collection[m]%2===0) 
    return collection[m]
  }
}

module.exports = find_last_even;
