var a = 1.0;
var b = 1.0;
var c = 1.0;


function news (problem, solution) {
	if (problem.length == 0) return 0;
	return (sumArray(solution)*a-sumArray(problem)*b)/10*(1 - solution.length/problem.length)*c;
}

function sumArray(array){
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i].subcategory.value;	
	};
	return sum;
};

function avg(array) {
	let av1 = 0;
	let av2 = 0;
	let av3 = 0;
	let av4 = 0;
	let av = 0;
	
	for (let i = 0; i < array.length; i++) {
		av1 += array[i].rate.val1;
		av2 += array[i].rate.val2;
		av3 += array[i].rate.val3;
		av4 += array[i].rate.val4;
    }
	
	av1 = av1/array.length;
	av2 = av2/array.length;
	av3 = av3/array.length;
	av4 = av4/array.length;
	av = (av1 + av2 + av3 + av4)/4;
	
	return {
		av1: av1,
		av2: av2,
		av3: av3,
		av4: av4,
		av: av
	}
	
}