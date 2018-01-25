'use strict';

function compare_collections(collection_a, collection_b) {
  if(collection_a.length!==collection_b.length)
     return false;
     else
      {
      for(var m=0;m<collection_a.length;m++)
      for(var m=0;m<collection_b.length;m++)
        {
        if(collection_a[m]!==collection_b[m])
        return false;
        }
      }
  return true;
  }

module.exports = compare_collections;


