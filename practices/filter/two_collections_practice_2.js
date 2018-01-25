'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result = [];
  for(var i =0;i<collection_a.length;i++)
    {
    if(collection_b.indexOf(collection_a[i])===-1)//在b中检索a[i]若等于-1说明b中没有这个数字
    result.push(collection_a[i]);
    }
  return result;
  }

module.exports = choose_no_common_elements;
