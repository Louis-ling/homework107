'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result=[];

  for(var m=0;m<collectionA.length;m++)
  {
    for(var n=0;n<collectionB[0].length;n++)
    //比较A集合和B集合中子数组的元素 
    {
      if(collectionA[m]==collectionB[0][n])
      {
        result.push(collectionA[m])
        break;
      }
    }
  }
  return result;
}