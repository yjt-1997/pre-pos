'use strict';
function createUpdatedCollection(collectionA, objectB) {
  var newB = objectB['value'];
	for(var i=0;i<collectionA.length;i++){
		for(var j=0;j<newB.length;j++){
			if(collectionA[i].key==newB[j]){
				var decrese = parseInt(collectionA[i].count/3);
				collectionA[i].count-=decrese;
				break;
			}
		}
	}
  	return collectionA;
}