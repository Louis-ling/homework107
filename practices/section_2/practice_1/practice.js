'use strict';

module.exports = function countSameElements(collection) {
 let result=[];
 let m=0;

    for(let n=0;n<collection.length;n++)
    {
      if(n==collection.indexOf(collection[n]))
      { 
        result[m]= {key:collection[n], count:1}//归类A集合中相同的元素
        m++;
      }
      else
      {  
        result[m-1].count++;//count加至对应的元素数量
      }
    }
    return result;       
}




  

