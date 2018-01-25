'use strict';

function compute_chain_median(collection) {
  var number =[];
  var m;
  var n;
  var tem;
  for(m=0;m<collection.length;m++)
  {
      var X = collection[m];
      while(m+1<collection.length &&collection[m+1]!=='-')
      {
          m++;
          X+=collection[m];
      }
      tem = change(X);
      number.push(tem);
      m+=2;
  }
  //排序
    for(m =0;m<number.length;m++)
    {
        var big = number[m];
        var locate = m;
        for(n = m+1;n<number.length;n++)
        {
            if(number[n]>big)
            {
                locate = n;
                big = number[n];
            }
        }
        if(locate!==m)
        {
            tem = number[m];
            number[m] = big;
            number[locate] = tem;
        }
    }
  //计算中值
  var w =0;
  var k=number.length-1;
  for(;w<k;w++,k--)
  {
      if(w+1===k)
          return (number[w]+number[k])/2;
  }
  return number[w+1];

}

function change(X)
{
    var m;
    var number=0;
    for(var k =0;k<X.length;k++)
    {
        m = 0;
        while(m!=X[k])
        {
            m++;
        }
        number = number*10+m
    }
    return number;
}

module.exports = compute_chain_median;
