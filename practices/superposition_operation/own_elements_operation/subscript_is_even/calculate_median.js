'use strict';
var calculate_median = function(collection){
    var collectionA = [];
    for(var i =1;i<collection.length;i+=2)
    {
        collectionA.push(collection[i]);
    }
    collectionA = desc(collectionA);
    var start = 0;
    var end = collectionA.length-1;
    for(;start<end;start++,end--)
    {
        if(start+1===end)
            return (collectionA[start]+collectionA[end])/2;
    }
    return collectionA[start];
};
module.exports = calculate_median;
//排序
function desc(collection)
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