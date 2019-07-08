'use strict';
function countSameElements(collection) {
	var result = new Array();
	result.push({name: 'a',summary: 1});
	var index = 0;
	for(var i=1;i<collection.length;i++){
		if(collection[i].length!=1){
			var mychar = collection[i].charAt(0);
			var num= parseInt(collection[i].replace(/[^0-9]/ig,""));
			if(result[index]['name']!=mychar){
				result.push({name: mychar,summary: num});
				index++;
			}else{
				result[index]['summary']+=num;
			}
		}else{
			if(result[index]['name']!=collection[i]){	
				result.push({name: collection[i],summary: 1});
				index++;
			}else{
				result[index]['summary']++;
			}
		}
	}
	return result;
}
