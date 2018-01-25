'use strict';

module.exports = function countSameElements(collectionA, objectB) {
  let C=[];
  let m=0;
 //参见section2中practice1
     for(let n=0;n<collectionA.length;n++)
     {
       if(n==collectionA.indexOf(collectionA[n]))
       { 
         C[m]= {key:collectionA[n], count:1}
         m++;
       }
       else
       {  
         C[m-1].count++;
       }
     }  //形成集合C
      //参见section3中practice1
     for(let x=0;x<objectB.value.length;x++)
     {
       for(let y=0;y<C.length;y++)
       {
         if(objectB.value[x]==C[y].key)
         //若B集合value对应的元素与C集合key对应的元素相同
        {
          //参见section3中practice2
          let z=C[y].count;//将A集合的count属性的数字赋值给z
          C[y].count=z-parseInt(z/3);//z満三减一
        }
       }
     }
   return C;
}
