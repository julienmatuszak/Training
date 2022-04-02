//constructor function identifiers are written with a capital letter
//they are executed with the new keyword
/*
function User(name) {
    this.name = name,
    this.isAdmin = false;
}

let user = new User("Jack");//user object is created from the constructor function, then the function 
//executes and add the properties, then it returns this (the object, implicitly)

alert(user.name);//jack
alert(user.isAdmin);//false
/* It's the equivalent of
let user = {
    name: "Jack",
    isAdmin: false
};

//except that now, we can create many users with the constructor User
//note that any function, except arrow functions, as they don't have this, can be used to create objects
//this is an example of encapsulation

//the .target method is used to know if an object was created using the User constructor (User()) or with the new keyword
//however, it is recommended to use the new keyword whenever it is possible

//there is usually no return statement in a constructor, but if there is one, it should return an object instead
//of this in case of an object, and ignore if it is a primitive, as in the example below:
function BigUser() {
    this.name = "John";
    return { name: "Godzilla"};//return an object and not this
}
alert( new BigUSer().name );//Godzilla

//OR

function SmallUser() {
    this.name = "John";

    return;
}
alert( new SmallUser().name );//John
// after new, parentheses can be omitted
//let user = new User and let user = new User() are the same

function User(name) {
    this.name = name;//don't forget that this is function, not an object, so no comma but a semicolon

    this.sayHi = function() {
        alert( "My name is: " + this.name );
    };
}
let john = new User("John");

john.sayHi();
//

function A() {

 }
function B() { 

 }

let a = new A;
let b = a;//here the objects are the same, remember?
//let b = new B;

alert( a == b ); // true
alert( a === b); // true as well because same type

//another way
let obj = {};
function A() { return obj; }
function B() { return obj; }
//let a = new A;
//let b = new B;
//alert( a == b);//obj = {} is returned// we can also just write alert( new A == new B );

function Calculator() {
    this.read = function() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );
*/

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Enter a value: ", 0);
    };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values