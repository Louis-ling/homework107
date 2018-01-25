'use strict';

module.exports = function countSameElements(collection, objectB) {
  let C=[];
  let m=0;
  let R=[];
 
 //参见section2中practice2
  for(let n=0;n<collection.length;n++){
    if(collection[n].length==1)//针对单个字符的方法
       {
       if(n==collection.indexOf(collection[n]))
       { 
         C[m]={key:collection[n], count:1};  
         R.push(collection[n]); 
         m++;
       }
 
  else{  C[R.indexOf(collection[n])].count++;
         }
  }
 
     if(collection[n].length==3)//针对“d-5”的方法
     {
 
         if(R.indexOf( collection[n].charAt(0) ) !==-1  )
         {
           let p=R.indexOf( collection[n].charAt(0) );
           let q=parseInt(collection[n].charAt(2));
           C[p].count=C[p]+q;
         }
 
       else C[m]={ key:collection[n].charAt(0), count:parseInt(collection[n].charAt(2))};
     }
  }
//形成集合C
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
