'use strict';

module.exports = function countSameElements(collectionA, objectB) {
  
 for(let m=0;m<objectB.value.length;m++)
 {
   for(let n=0;n<collectionA.length;n++)
   {
     if(objectB.value[m]==collectionA[n].key)
     //若B集合value对应的元素与A集合key对应的元素相同
     collectionA[n].count--;
     //则A集合相应元素count属性-1
   }
 }
    return collectionA;    
}
