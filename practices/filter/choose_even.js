'use strict';

function choose_even(collection) {
  var result=[];
  for(var m=0;m<collection.length;m++)
  {
    if(collection[m]%2===0) 
    result.push(collection[m]) 
  }
return result;
}

module.exports = choose_even;
