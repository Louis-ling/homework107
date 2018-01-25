'use strict';
function rank_by_two_large_one_small(collection){
  var result=[];
  result = rank_desc(collection);
  for(var i =0;i<result.length;i+=3)
  {
      var j;
      j = i+2;
      if(j<result.length)
      {
          var tem = result[i];
          result[i] = result[i+1];
          result[i+1]=result[i+2];
          result[i+2]=tem;
      }
  }
  return result;
}
module.exports = rank_by_two_large_one_small;

function rank_desc(collection)
{
  for(var m =0;m<collection.length;m++)
  {
      var x = collection[m];
      var locate = m;
      for(var n = m+1;n<collection.length;n++)
      {
          if(collection[n]<x)
          {
              locate = n;
              x = collection[n];
          }
      }
      if(locate!==m)
      {
          var tem = collection[m];
          collection[m] = x;
          collection[locate] = tem;
      }
  }
  return collection;
}