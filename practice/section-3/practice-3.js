'use strict';
//求对象数组
function getObject(collection) {
	var result = new Array();
	result.push({key: 'a',count: 1});
	var index = 0;
	for(var i=1;i<collection.length;i++){
		if(result[index]['key']!=collection[i]){	
			result.push({key: collection[i],count: 1});
			index++;
		}else{
			result[index]['count']++;
		}
	}
	return result;
}
function createUpdatedCollection(collectionA, objectB) {
	var myObject = getObject(collectionA);
	console.log(myObject);
  	var newB = objectB['value'];
	for(var i=0;i<myObject.length;i++){
		for(var j=0;j<newB.length;j++){
			if(myObject[i].key==newB[j]){
				var decrese = parseInt(myObject[i].count/3);
				myObject[i].count-=decrese;
				break;
			}
		}
	}
  	return myObject;
}