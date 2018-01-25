'use strict';

function get_union(collection_a, collection_b) {
  let result=collection_a
  for(var m = 0;m<collection_b.length;m++)
  {
    var x = 0;
    for(var n = 0;n<collection_a.length;n++)
    {
      if(collection_a[n]===collection_b[m])
        x = 1;
    }
    if(x===0)
      result.push(collection_b[m]);
  }
  return result;
}


module.exports = get_union;

