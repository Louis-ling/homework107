'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];
  for(var m = 0;m<collection_b.length;m++)
  {
    var x = collection_b[m];//循环将a中的值赋给中介元素x
    for(var n = 0;n<collection_a.length;n++)
    {
      if(x===collection_a[n])//循环检测相同则输出
      {
        result.push(x);
        break;
      }
    }
  }
  return result;
}

module.exports = get_intersection;
