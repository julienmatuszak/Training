/*
the instancdeof operator allows to check whether an object belongs to a certain clas
it takes inheritance into account.
it can be used a polymorphic function
it;s the same as typeof for class

class Rabbit {}
let rabbit = new Rabbit();
// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true

// instead of class
function Rabbit() {}
alert( new Rabbit() instanceof Rabbit ); // true

let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true

arr belongs to object because array inherits from object
instnceof examines the prototype chain 
a static method symbol.hainstance can be impolemented

Algorithm:1.symbol.hasinstance and call class[symbol.hasinstnce](obj)
// setup instanceOf check that assumes that
// anything with canEat property is an animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}
let obj = { canEat: true };
alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called

2 but most classes don't have synbol.hasinstnace
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
...
// if any answer is true, return true
// otherwise, if we reached the end of the chain, return false
in that casd class.prototype is equal to one of the prototypes is checked

above, rabbit proto is rabbit prototype so we know

if inheritance the match will be at 2nd step, see below
class Animal {}
class Rabbit extends Animal {}
let rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true
// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (match!)

there;s also a methodo objA.isPrototypeOf that returns true if obja is somewhere in that chain

so obje instance of class is class.prototype.isprototypeof(obj)

the class constructor itself does not check only the chain matters

function Rabbit() {}
let rabbit = new Rabbit();
// changed the prototype
Rabbit.prototype = {};
// ...not a rabbit any more!
alert( rabbit instanceof Rabbit ); // false

object.prototype.tostring
the conversion of object is object object with to string

BUT TOSTRING CAN BE USED AS AN EXTENDED TYPEOF OR AN ALTERNATIVE FOR INSTANCEOF
NUMBER: object number and s o on

object Null object Undefined etc

// copy toString method into a variable for convenience
let objectToString = Object.prototype.toString;
// what type is this?
let arr = [];
alert( objectToString.call(arr) ); // [object Array]
Here we used call as described in the chapter Decorators and forwarding, call/apply to execute the function objectToString in the context this=arr.

let s = Object.prototype.toString;
alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]

symbol.tostringtag
this object property can customize

let user = {
  [Symbol.toStringTag]: "User"
};
alert( {}.toString.call(user) ); // [object User]

// toStringTag for the environment-specific object and class:
alert( window[Symbol.toStringTag]); // Window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest
alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]
*/