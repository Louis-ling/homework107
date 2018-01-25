'use strict';

function double_to_one(collection) {
  var result = [];
  var X=[]
  for(var m =0;m<collection.length;m++)
  {
      if(typeof(collection[m].length)==='undefined')
      {
          X.push(collection[m]);
          continue;
      }
      for(var n = 0;n<collection[m].length;n++)
      {
          X.push(collection[m][n]);
      }
  }
  for(var n= 0;n<X.length;n++)
  {
    if(result.indexOf(X[n])===-1)
    {
      result.push(X[n]);
    }
  }
  return result;
}

module.exports = double_to_one;
