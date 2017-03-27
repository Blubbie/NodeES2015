// Destructuring Assignment (de-Strukturieren, nicht zerstören ;-)
const primes= [2, 3, 5, 7, 11];
/*  Erstellung von Variablen mit Zuweisung aus einem Array.
	The old fashioned way...
	const first  = primes[0];
	const second  = primes[1];

	Alles ab der zweiten Stelle, oder die ersten beiden abgeschnitten
	const rest = primes.slice(2); 	
*/

// viel besser mit de-structuring!
// erzeuge 3 vars, wobei first und second jeweils den ersten und
// zweiten wert aus primes bekommen und rest alles weitere
const [first, second, ...rest] = primes;  

console.log(first); // 2 
console.log(second); // 3
console.log(rest); // [5,7,11]

const person = {
	firstName: "Steve",
	middleName: "Paul",
	lastName: "Jobs"
};

const person2 = {
	firstName2: "Bill",
	lastName2: "Gates"
};

// old way...
// const firstName = person.firstName;
// const lastName = person.lastName;

// new: kurzschreiweise, definere neue variablen firstName und lastName
// ziehe dabei die Werte dafür aus dem Objekt person
// wenn lastName nicht definiet ist, wird dieser mit Balmer besetzt
const { firstName, lastName = "Balmer"} = person;
// wenn middleName2 nicht definiet ist, wird dieser mit Homer besetzt
const { firstName2, middleName2 = "Homer", lastName2} = person2;

console.log(firstName);
console.log(lastName);

console.log(firstName2);
console.log(middleName2);
console.log(lastName2);
