'use strict';
var calculate_average = function(collection){
    var result=0
    var sum=0
    var n=0
    for(var m=1;m<collection.length;m++)
    if(m%2==0)
      {
      sum+=collection[m]
      n=n+1
      }
      result=sum/n
      return result
    }
module.exports = calculate_average;
