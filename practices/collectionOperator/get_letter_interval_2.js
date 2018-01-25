'use strict';

function get_letter_interval_2(number_a, number_b) {
  var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var X = [];
  var result=[]
  var n=0
  var o=0
  var p=0
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
{
  if(X[m]<=26)
  result.push(letter[X[m]-1])
  if(26<X[m]&&X[m]<=52)
  result.push("a"+String.fromCharCode(96+X[m]-26))
  if(52<X[m])
  result.push("b"+String.fromCharCode(96+X[m]-52))
}
return result;
}
module.exports = get_letter_interval_2;

