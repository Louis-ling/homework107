'use strict';
var even_asc_odd_desc = function(collection){
    var even = [];
    var odd = [];
    var result = [];
    var i;
    for(i=0;i<collection.length;i++)
    {
        if(collection[i]%2===0)
            even.push(collection[i]);
        else
            odd.push(collection[i]);
    }
    even = rank_desc(even);
    odd = rank_asc(odd);
    for(i=0;i<even.length;i++)
        result.push(even[i]);
    for(i=0;i<odd.length;i++)
        result.push(odd[i]);
    return result;
};
module.exports = even_asc_odd_desc;

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

function rank_asc(collection)
{
    for(var m =0;m<collection.length;m++)
    {
        var x = collection[m];
        var locate = m;
        for(var n = m+1;n<collection.length;n++)
        {
            if(collection[n]>x)
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
  };