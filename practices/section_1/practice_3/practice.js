'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result=[];

    for(let m=0;m<collectionA.length;m++)
    {
      if(collectionB.value.indexOf(collectionA[m])>-1)
      //循环判定collectionA中的元素与collectionB的value属性中的元素是否相同
      {
        result.push(collectionA[m]);//若是则输出该元素
      }  
    }
    return result;
}
