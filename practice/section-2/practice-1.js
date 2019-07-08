'use strict';
function countSameElements(collection) {
	var temp = collection[0];
	var sum=1;
	var result = new Array();
	for(var i=1;i<collection.length;i++){
		if(i==collection.length-1){
			sum++;
			result.push({key: temp,count: sum});
			break;
		}
		if(temp!=collection[i]){	
			result.push({key: temp,count: sum});
			sum = 1;
			temp = collection[i+1];
		}else{
			sum++;
		}
	}
	return result;
}