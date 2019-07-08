'use strict';
const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
  ];
function countSameElements(collection) {
  	var temp = collection[0];
	var sum=1;
	var result = new Array();
	for(var i=1;i<collection.length;i++){
		if(i==collection.length-1){
			result.push({key: collection[i].charAt(0),count: parseInt(collection[i].charAt(2))});
			break;
		}
		if(i==collection.length-2){
			result.push({key: collection[i].charAt(0),count: sum+1});
			continue;
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
console.log(countSameElements(collection));
