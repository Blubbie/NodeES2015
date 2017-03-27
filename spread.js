// spread Operator
// ... (punkt punkt punkt) ist der spread Operator, er zerlegt das array

const numbers = [1,2,3,4,5];
const sumDefault = function (a,b,c,d,e) {
	return a+b+c+d+e;
}
console.log(sumDefault(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]));
// hier werden nicht n-Parameter übergeben sondern mit spread operator das Array
// aufgeteilt in einzelne Parameter
console.log(sumDefault(...numbers)); 


const sumWithSpread = function    (...list) {  // Rest operator
  return list.reduce((sum, i) => sum + i);
};

console.log(sumWithSpread(...numbers)); // Spread operator
console.log(sumWithSpread(23, 42, 65));
