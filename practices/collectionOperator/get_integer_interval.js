'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  if(number_a<=number_b)
  {
    for(var m = number_a;m<=number_b;m++)
    {
      result.push(m);
    }
  }
  else
  {
    for(var m = number_a;m>=number_b;m--)
    {
      result.push(m);
    }
  }
  return result;
}


module.exports = get_integer_interval;

