'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let A=[];
  let result=[];

    for(let m=0;m<collectionA.length;m++)
      {
      A.push(collectionA[m].key);
      //选出collectionA集合中的key属性对应的元素形成新集合A
      }    
    for(let n=0;n<A.length;n++)      
      if(collectionB.value.indexOf(A[n])>-1)
      //比较collectionB中value属性对应的元素与A集合元素
        {
        result.push(A[n]);
        }
   
    return result;
}
