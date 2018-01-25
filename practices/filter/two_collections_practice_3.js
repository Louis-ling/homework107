'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];
  var X=[]
  for(var i =0;i<collection_a.length;i++)
    {
    for(var j =0;j<collection_b.length;j++)
        {
        if(collection_a[i]%collection_b[j]===0)
        X.push(collection_a[i]);
        }       
    }

  for(var m= 0;m<X.length;m++)
  {
    if(result.indexOf(X[m])===-1)
    {
      result.push(X[m]);
    }
  }
  return result
}

module.exports = choose_divisible_integer;
