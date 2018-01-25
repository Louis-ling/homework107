'use strict';

function collect_all_even(collection) {
  var result=[];
    for(var m=0;m<collection.length;m++)
    {
      if(collection[m]%2===0)//选出偶数
      result.push(collection[m]) 
    }
 return result;
 }
 module.exports = collect_all_even;
