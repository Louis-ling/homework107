'use strict';

function choose_multiples_of_three(collection) {
  var result=[];
  for(var m=0;m<collection.length;m++)
  {
    if(collection[m]%3===0) 
    result.push(collection[m]) 
  }
return result;
}


module.exports = choose_multiples_of_three;
