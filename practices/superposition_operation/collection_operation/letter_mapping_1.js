'use strict';

function even_to_letter(collection) {
  var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = [];
  for(var m =0;m<collection.length;m++)
    {
    if(m%2===0)
    result.push(letter[collection[m]])
    }  
  return result;
}
module.exports = even_to_letter;
