// Hoisting, variablen declaration wird an den anfang einer funktion geschoben,
// aber nicht die definition/zuweisung
var x = 23;

foo = function () {
	console.log(x);  //2. undefined, weil durch shadowed var x nach oben geschoben wird aber nicht initiert ist.
	var x = 42; 

	// var x = 42; entspricht:
	//1. Declaration: var x; 
	//2. Defnition: x = 42;
	console.log(x); //3. 42
}

console.log(x); //1. 23
foo();
console.log(x);  //4. 23

// alle variablen declaration an den anfang!!!

// wenn man statt var aber let verwendet wird die declaration auch wirklich an der stelle gemacht 
// var auf gar keinen fall mehr verwenden
// wenn man die wahl hat lieber noch const verwenden !!!
/*
const > let >> var

let ist mutable
const ist immutable
*/	
// const Array kann aber verändert weren.   
const primes =  [2,3,7];
primes.push(11);
//   primes = 2,3,7,11 

// const meineZahl = 3  == value typ
// const meinZahlenarry   = refrence typ
// weil ein Array ein reference Typ ist der im Heap liegt und daher veränderbar ist
// vergleich man hält ein brötchen in der hand  vs man hält einen teller in der hand mit brötchebn drauf

// immutubility
// concat ist immutable push
// slice is immutable pop


