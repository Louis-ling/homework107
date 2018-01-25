'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result =[];
  if(number_a<=number_b)//若A小于B则由A至B递增
  {
    for(var m = number_a;m<=number_b;m++)//自增
    {
      if(m%2===0)//只输出偶数
      {
        result.push(m);
      }
    }
    return result;
  }
  else//若A大于B则由A至B递减
  {
    for(var m = number_a;m>=number_b;m--)//自减
    {
      if(m%2===0)//只输出偶数
      {
        result.push(m);
      }
    }
  }
  //若两数字相同 则进入第一个循环 由于数字相同只循环一次 直接进入奇偶判定
  return result;
}

module.exports = get_integer_interval_2;
