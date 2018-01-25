'use strict';
var rank_asc = function(collection){
  for(var m =0;m<collection.length;m++)
  {
      var x = collection[m];
      var locate = m;
      for(var n = m+1;n<collection.length;n++)
      {
          if(collection[n]>x)
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
};

module.exports = rank_asc;
