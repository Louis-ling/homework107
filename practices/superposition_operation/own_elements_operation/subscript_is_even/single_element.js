'use strict';
var single_element = function(collection){
    var X = [];
    var tag;
    var result = [];
    var m;
    var n;
    for(m =1;m<collection.length;m+=2)
    {
     X.push(collection[m]);
    }
    for(m=0;m<X.length;m++)
    {
        tag = true;
        for(n= 0;n<X.length;n++)
        {
            if(m!==n && X[m]===X[n])
            {
                tag = false;
                break;
            }

        }
        if(tag ===true)
            result.push(X[m]);
    }
    return result;
};
module.exports = single_element;
