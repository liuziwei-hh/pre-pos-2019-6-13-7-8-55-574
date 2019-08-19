'use strict';

function countSameElements(collection) {
  var result = [];
 var m = new Map();
  for (var i=0;i<collection.length;i++){
    if (m.get(collection[i])==null){
      m.set(collection[i],1);
    }else{
      m.set(collection[i],m.get(collection[i])+1);
    }
  }
  //console.log(map);
  m.forEach(function(key,value){
    result.push({key:value,count:key})
  });
  console.log(result);
  return result;
}
