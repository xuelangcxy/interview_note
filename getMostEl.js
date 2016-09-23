/*
* @func: 获取一个数组中出现最多的数字
*/
function getMostEl(arr) {
	var max = 0;
	var elem = ''; 
	var objArr = [{'elem': '', 'count': 0}];
	for (var i = 0; i < arr.length; i++) {
		for (var idx in objArr) {
			if (objArr[idx].elem == arr[i]) {
				if (++objArr[idx].count > max) {
					max = objArr[idx].count;
					elem = objArr[idx].elem;
				};
			} else{
				if (idx == objArr.length-1) {
					objArr.push({
					'elem': arr[i],
					'count': 1
				})
				};
				
			};
		};
	};
	console.log(objArr);
	return {'elem': elem, 'count': max};
}

var arr = ['a', 'b', 'a', 'a','b','b','b'];
var elem = getMostEl(arr);
console.log(elem);