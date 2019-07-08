'use strict';

function getUnion(collectionA, collectionB) {
	var arr = [];
	for(var i =0;i<collectionA.length;i++){
		for(var j=0;j<collectionB.length;j++){
			if(collectionB[j]==collectionA[i]){
				arr.push(collectionB[j]);
				break;
			}
		}
	}
	return arr;
}
function collectSameElements(collectionA, objectB) {
  return getUnion(collectionA,objectB['value']);
}
