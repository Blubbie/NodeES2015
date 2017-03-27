// THIS, SELF, THUS, THAT.....and all that stuff
const externalBark =  function () {  
		// this ist hier eigentlich ein versteckter parameter..
		console.log("Wuff wuff... " + this.name);
	}

const dog = {
	name: "Joey",
	bark: externalBark
};

// unterschiedliche ausgaben, da THIS in anderem context
// es gibt immer ein THIS, es ist automatisch bei allen "Sachen" immer unter der Haube da
dog.bark(); // wuff wuff Joey
externalBark(); // wuff wuff undefined


// Duck typing, mit call wird dave das THIS in der externalBark
// The rule of "Duck Typing" is:
// If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.
// see: http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply
// theFunction.apply(valueForThis, arrayOfArgs)
// theFunction.call(valueForThis, arg1, arg2, ...)

const dave = {
	name: "Dave"
}
externalBark.call(dog);
externalBark.apply(dave);
// Lisp ist der ursprung von JAvascript und nicht java oder c



