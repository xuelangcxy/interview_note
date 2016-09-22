/*
* @func: 获取一个数的阶乘中有多少个0
* @description: 计算阶乘数有多少5的倍数，25的倍数，125的倍数
*/
function getZeroCount(num) {
	var count = 0;
	for (var i = 1; ; i++) {
		if (Math.floor(num/(Math.pow(5,i))) > 0) {
			count += Math.floor(num/(Math.pow(5,i)));
		} else{
			return count;
		};
	};	
}

/*var result = getZeroCount(2014);
console.log(result);*/