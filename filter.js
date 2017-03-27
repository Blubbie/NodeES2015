const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const names = ["dave", "Brian", "John"];
// befülle evens mit werten aus numbers
// wende dabei filter für jedes item an
// filtere dabei item modulo 2 = 0, also nur die geraden zahlen
const evens = numbers.filter(item => item % 2 === 0)
console.log("Nur die geraden Zahlen: "  + evens);

// ist eine bestimmte Zahl im Array?
if (numbers.includes(5)) {
  console.log('5 ist enthalten');
}

// case sensitiv !!!
if (names.includes("Brian")) {
  console.log('Brian ist enthalten');
}

// The some() method tests whether some element in the array passes the test implemented by the provided function.
function isBiggerThan8(element, index, array) {
  return element > 8;
}
console.log(numbers.some(isBiggerThan8));
console.log(names.some(isBiggerThan8));
