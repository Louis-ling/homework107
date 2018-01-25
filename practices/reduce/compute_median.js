'use strict';

function compute_median(collection) {
    var result = rank_desc(collection);
    var end = result.length-1;
    var start = 0;
    for(;start<end;start++,end--)
    {
        if(start+1===end)
          return (result[start]+result[end])/2;
    }
    return result[start];
}

module.exports = compute_median;

//排序
function rank_desc(collection)
{
for(var m =0;m<collection.length;m++)
{
    var x = collection[m];
    var locate = m;
    for(var n = m+1;n<collection.length;n++)
    {
        if(collection[n]<x)
        {
            locate = n;
            x = collection[n];
        }
    }
    if(locate!==m)
    {
        var tem = collection[m];
        collection[m] = x;
        collection[locate] = tem;
    }
}
return collection;
}

//获得元素互异的集合
function different(collection)
{
    var result = [];
    result[0] = collection[0];
    var j = 0;
    for(var i=1;i<collection.length;i++)
    {
        if(collection[j]!==collection[i])
            result[++j] = collection[i];
    }
    return result;
}


