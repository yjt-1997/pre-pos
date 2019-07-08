'use strict';
function countSameElements(collection) {
	var result = new Array();
	result.push({key: 'a',count: 1});
	var index = 0;
	for(var i=1;i<collection.length;i++){
		if(collection[i].length!=1){
			var mychar = collection[i].charAt(0);
			var num= parseInt(collection[i].replace(/[^0-9]/ig,""));
			if(result[index]['key']!=mychar){
				result.push({key: mychar,count: num});
				index++;
			}else{
				result[index]['count']+=num;
			}
		}else{
			if(result[index]['key']!=collection[i]){	
				result.push({key: collection[i],count: 1});
				index++;
			}else{
				result[index]['count']++;
			}
		}
	}
	return result;
}
function createUpdatedCollection(collectionA, objectB) {
	var newB = objectB['value'];
	var myObject = countSameElements(collectionA);
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
