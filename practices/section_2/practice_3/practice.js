'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    let R=[];
    for(var m = 0;m<collection.length;m++)
    {
      var tag=-1;
      for(var n = 0;n<result.length;n++)
      {
          if(collection[m][0]==result[n].name)
          {
            tag = n;
            break;
          }
      }
      if(collection[m].length==1)//针对单个字符的方法
      {
          if(tag==-1)
          {
              R={name:collection[m], summary:1}
              result.push(R);
          }

          else
          {
              result[tag].summary++;
          }
      }
      
      else
      {
        if(collection[m][1]=='[')//针对其他的方法
        {
            var nu = collection[m].substring(2,collection[m].length-1);
            var number = 0;
            for(var j=0;j<nu.length;j++)
            {
                var b = 0;
                while(b!=nu[j])
                {
                    b++;
                }
                number = number*10+b;
            }
            if(tag==-1)
            {
                R={name:collection[m][0], summary:b}
                result.push(R);
            }
            else
            {
                result[tag].summary+=number;
            }
        }
        else
        {
            for(var j=0;j<collection[m].substring(2).length;j++)
            {
                var a = 0;
                while(a!=collection[m].substring(2)[j])
                {
                    a++;
                }
            }
             if(tag==-1)
             {
                R={name:collection[m][0], summary:a}
                result.push(R);
             }
             else
             {
                result[tag].summary+=a;
             }
        }
      }
    }
    return result;
  }


