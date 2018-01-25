'use strict';
var is_exist_element = function(collection,element){
        for(var m =0;m<collection.length;m+=2)
        {
            if(collection[m]===element)
                return true;
        }
        return false;
    };
module.exports = is_exist_element;
