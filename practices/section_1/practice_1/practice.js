function collect_same_elements(collection_a, collection_b) {
  let result=[];

  for(var m=0;m<collection_a.length;m++)
  {
    for(var n=0;n<collection_b.length;n++)//循环
    {
      if(collection_a[m]==collection_b[n])
      {
        result.push(collection_a[m])
      }
    }
  }    
//若A集合与B集合元素相同则输出A集合中相同的那个元素
    return result;
}

module.exports = collect_same_elements;
