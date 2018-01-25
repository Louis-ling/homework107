'use strict';

module.exports = function countSameElements(collection) {
 let result=[];
 let m=0;
 let R=[];


 for(let n=0;n<collection.length;n++){
   if(collection[n].length==1)//针对单个字符的方法
      {
      if(n==collection.indexOf(collection[n]))
      { 
        result[m]={key:collection[n], count:1};  
        R.push(collection[n]); 
        m++;
      }

 else{  result[R.indexOf(collection[n])].count++;//count加至相应数量
        }
 }

    if(collection[n].length==3)//针对“d-5”的方法
    {

        if(R.indexOf( collection[n].charAt(0) ) !==-1  )
        {
          let p=R.indexOf( collection[n].charAt(0) );
          let q=parseInt(collection[n].charAt(2));
          result[p].count=result[p]+q;
        }

      else result[m]={ key:collection[n].charAt(0), count:parseInt(collection[n].charAt(2))};
    }

 }
 return result;   

    
}

