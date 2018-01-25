'use strict';

function average_to_letter(collection) {
  var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var average=0
  var result=0
  var sum=0
  for(var m=0;m<collection.length;m++)
    {
    sum+=collection[m]
    }
    average=sum/collection.length
    var m=parseFloat(average).toFixed()
    average=parseFloat(m)
    result=(letter[average-1])
    return result;
  }
module.exports = average_to_letter;

