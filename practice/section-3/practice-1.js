'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var newB = objectB['value'];
	for(var i=0;i<collectionA.length;i++){
		for(var j=0;j<newB.length;j++){
			if(collectionA[i].key==newB[j]){
				collectionA[i].count--;
				break;
			}
		}
	}
  	return collectionA;
}
