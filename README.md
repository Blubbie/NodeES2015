//React Deep Dive - funktionale Grundlagen
// https://github.com/goloroden
// https://github.com/goloroden/jsdays-2017

//Angular 1
//HTML:
<ul> ng-repeat="person in controller.persons"></ul>
	<li>{{person.firstName}}</li>
</ul>

//Angular 2
//HTML:
<ul> ng-for="person in controller.persons"></ul>
	<li>{{person.firstName}}</li>
</ul>


//React
//JS:
var listItems = [];
for (var i=0; i < persons.length; i++) {
	listItems.push(<li>{persons[i].firstName}</li>);
}
React.render(
	<ul>
		{listItems}
	</ul>
)
/*
React ist viel dichter an native JS als Angular, man verwendet viel mehr reines JS Know how als in Angular.
Bei Angular muss man viel mehr Angular Prinzipien und Befehle kennen. D.h. man lernt und braucht dabei eigentlich Angular und weniger JS während bei React mehr reines JS wissen nötig ist.
*/

sum = add (23, 42); /// kann schon vor der definition aufgerufen werden

// function statement, nicht empfholen !
function add (left, right) {
	return left + right;
}

// function expression
// anonyme funktion
sub = function (left, right) {
	return left - right;
}

diff = sub (42, 23) // kann erst nach der defintion verwendet werden


ticTacToe = [
	'x', 'o', 'x',
	'x', '', 'o',
	'x', '', '',
];

sum = 0;
if (ticTacToe[0] === 'x') {
	sum += 256;
}

if (ticTacToe[1] === 'x') {
	sum += 128;
}

[...]



currentSituation = 101100100 = 356
winningSituation = 100100100 = 292
				&	//bitweise verknüpfung
					100100100 = 292

currentSituation & winningSituation === winningSituation
356&292 === 292
0
(356&292) === 292
true



// Besser:

ticTacToe = [
	'x', 'undefined', 'x',
	'x', 'undefined', 'undefined',
	'x', 'undefined', 'undefined',
];

result =  [];

/*
DRY und WET Prinzipien
Dont Repeat Yourself
Write Everything Twice ;-)
*/

// Lamda Ausdrücle  () => 

// code von 69 zeilen reduziert auf.... unter 20


processArray = function(input) {
	output = [];
	for(var i=0; i < input.length; i++) {
		output.push(magicFunction(item, i));
	}

	return output;
};

magicFunction = function (item, i) {

}

getOnlyXs = function(board, character) {
	result = processArray(board);


} 

Array.map,  Array.reduce
// Default parameter in Funktionen

//Google hat map / reduce für die Suche verwendet. Vor allen anderen.
// DB server die bestimmte teile des internet indiziert haben werden parallel angefragt
// danach wird gemappt und reduced... => ergebnis


//for schleifen:
len = bla.length;  // hier performance gewinn
for(var i= len -1; i => 0; i--) {  // hier auch weil vergleich mit 0 schneller ist und sicherer
	// ...
}

Array.filter

// ob bestimmter wert in array ist
Array.indexOf() // alt
Array.includes() // neu
Array.some() 



// Pure functions
// verändern nicht variablen / werte
// haben immer rückgabewerte

x = 23;

// not pure BAD!!!!
foo = function() {
	x = 42;
}

// pure  GOOD!   sind auch besser testbar und verändern nicht werte
foo = function(y) {
	return 42 + y
}

console.log(x);
foo();

console.log(x);
console.log(x);

// mal nachlesen: https://de.wikipedia.org/wiki/Monade_(Informatik)


// Hoisting, variablen declaration wird an den anfang einer funktion geschoben, aber nicht die definition/zuweisung

var x = 23;

foo = function () {
	console.log(x);  //2. undefined, weil durch shadowed var x nach oben geschoben wird aber nicht initiert ist.
	var x = 42; 
	// var x = 42; entspricht
	/*
	var x;   // declaration
	x = 42;  // defnition

	*/
	console.log(x); //3. 42
}

console.log(x); //1. 23
foo();
console.log(x);  //4. 23

// alle variablen declaration an den anfang!!!

// wenn man statt var aber let verwendet wird die declaration auch wirklich an der stelle gemacht 
// var auf gar keinen fall mehr verwenden
// wenn man die wahl hat lieber noch const verwenden !!!

const > let >> var

let ist mutable
const ist immutable
	
// const Array kann aber verändert weren.   
const primes [2,3,7];
primes.push(11);
//   primes = 2,3,7,11 

// const meineZahl = 3  == value typ
// const meinZahlenarry   = refrence typ
// weil ein Array ein reference Typ ist der im Heap liegt und daher veränderbar ist
// vergleich man hält ein brötchen in der hand  vs man hält einen teller in der hand mit brötchebn drauf

// immutubility
// concat ist immutable push
// slice is immutable pop

// facebook immutable js, lib für immutabla funktionen, überschreibt z.b. push und pop
// https://facebook.github.io/immutable-js/

// spread Operator

const numbers = [1,2,3,4,5];
const sum = function (a,b,c,d,e) {
	return a+b+c+d+e;
}
console.log(sum(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]));
console.log(sum(...numbers));  // ... ist der spread Operator, zerlegt das array


// rest Operator
const sum = function (...list) {  // rest operator, aus liste wird array gemacht
	return list.reduce((sum,i) => sum +i);
}

console.log(sum(...numbers)); 
console.log(sum(23,42, 65)); 

// Destructuring Assignment
const primes= [2,3,5,7,11];
/*
	const first  = primes[0];
	const second  = primes[1];
	const rest = primes.slice(2);	
*/

const [first, second, ...rest] = primes;  // destructuring
console.log(first); 
console.log(second);
console.log(rest);

const person = {
	firstName: "Steve",
	middleName: "Paul",
	lastName: "Jobs"
};

const firstName = person.firstName;
const lastName = person.lastName;

// kurzschreiweise,  und wenn lastName nicht definiet ist, wird dieser mit Balmer gesetzt
const { firstName, lastName = "Balmer"} = person;


// THIS

const externalBark =  function () {  // this ist hier eigentlich ein versteckter parameter..
		console.log("wau wau... " + this.name)
	}

const dog = {
	name: "Alice",
	bark: externalBark
};

// unterschiedliche ausgaben, da this in anderem context
// es gibt immer ein this, es ist automatisch bei allen sachen "immer unter der habe da"
dog.bark();
externalBark();

const malin = {
	name: "Malin"
}

externalBark.call(malin);   //Duck typing,   mit call wird malin das this in der external bark
externalBark.apply(malin, .....)
// Lisp ist der ursprung von JAvascript und nicht java oder c









NodeJS

- "es gibt photoshop im web - nicht nur als download von irgendwelchen warez seiten"
- vm in js  http://bellard.org/jslinux/
- Command and Conquer - in html5, https://www.adityaravishankar.com/projects/games/command-and-conquer/
- comanche, windows und und und ...
- nvm / nvm-windows, node version manager

- setTimeout - führe in frühestens n-ms den befehl xyz aus
- setTimeout, kann(!) auch kurz vor timeout wert und danach nochmal ausgeführt werden


node projekte immer mit package.json (npm init erstellt eine) 
arbeiten und neue node module immer mit npm install "modulname" --save installieren

ACHTUNG:  mit  --save wird neues modul in package.json geschrieben allerdings mit "^" vor der Versionsnummer, dadurch wird bei neuen installationen mit npm install immer die aktuell neuste version genommmen.
Wenn man eine fixe version haben will muss man die "^" entweder entfernen oder den befehl zum installieren ändern
von:  npm install "bla" --save  
zu:   npm install "bla" --save --"save-exact"
es ist auch möglich dies als standard/default setting in npm zu konfigurieren damit das imemr so passiert

{
  "name": "my_demo_app",
  "version": "0.0.0",
  "dependencies": {
    "cors": "^2.8.1",
    "express": "^4.15.2"
  }
}

Der Befehl:
npm shrinkwrap - erstellt eine json mit infos zu den nötigen und verwendeten dependencies

oder YARN (facebook), 
zitat: "wie shrinkwrap in grün, nur dass es funktioniert"
https://yarnpkg.com/lang/en/docs/install/


Siehe auch Beispiele für:
- webserver
- express routing, json, import, export
- mongoDB, mlab https://mlab.com

Codeanalyse: jslint, jshint,  ESLint
Lint regeln von Golo: npm install eslint-config-es --save-dev

Deploy mit Docker,  nie wieder "But it works on my machine!"   - > "It works everythere"

www.thenativeweb.io  // Node.js for enterprise,  as a service





