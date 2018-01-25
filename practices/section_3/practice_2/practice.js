'use strict';

module.exports = function countSameElements(collectionA, objectB) {

 for(let m=0;m<objectB.value.length;m++)
 {
   for(let n=0;n<collectionA.length;n++)
   {
     if(objectB.value[m]==collectionA[n].key)
     //以上均和practice1中的相同
     {
      let x=collectionA[n].count;//将A集合的count属性的数字赋值给x
      collectionA[n].count=x-parseInt(x/3);//x満三减一
     }
   }
 }
    return collectionA; 
}
