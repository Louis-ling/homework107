'use strict';

function get_letter_interval(number_a, number_b) {
  var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var X = [];
  var result=[]
  if(number_a<=number_b)
  {
    for(var m = number_a;m<=number_b;m++)
    {
      X.push(m);
    }
  }
  else
  {
    for(var m = number_a;m>=number_b;m--)
    {
      X.push(m);
    }
  }
  for(var m =0;m<X.length;m++)
    result.push(letter[X[m]-1])
  return result;
}
module.exports = get_letter_interval;
