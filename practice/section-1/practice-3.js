'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<objectB.value.length;j++){
      if(collectionA[i]===objectB.value[j]){
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}
