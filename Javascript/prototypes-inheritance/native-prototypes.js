/*
the prototype property is widely used by the core
all built in constructor functions use it

Object.prototype
let obj = {};
alert( obj ); // "[object Object]" ?

the code that generates that is a built in toString method
the object is empty but actually it is the same as writing obj = new Object()

Object is a built in object constructor function, with its own prototype referenceing a huge object that has
toString and plenty of other methods.

so we have the same relation as before between Rabbit and the prototype but here Rabbit is the object
and is related to Object.prototype by the same relation.

let obj = {};

alert(obj.__proto__ === Object.prototype); // true
alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true
obj and Object both has the method toString
Careful we have to writh obj.__proto__ and not prototype because obj inherits from the prototype

there is no prototype of object
There are plenty of boit in prototypes Array, Date, Function, etc.
when we create an array 1, 2, 3 the default new Array() constructor is used internally.
Array.prototype becomes its prototypes and provides methods.

all of the builtin prototypes have object.prototype on top
everythin inherits from object

let arr = [1, 2, 3];
// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true
// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true
// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null nothing over object

some methods like toString overlap
and because array.prototype inherits from Object.prototype it uses its own toString
tools like chrome developer console also show inheritance console.dir

the methods that we saw for functions,like call apply also inherit function.prototype. and function have their own toString
function f() {}
alert(f.__proto__ == Function.prototype); // true
alert(f.__proto__.__proto__ == Object.prototype);// true, inherits from objects

but how about primitives? they're not objects but if we try to access their properties, temporary wrapper objects are
using built in constructors String Number Boolean. they provide the methods and disappear
These means they have their own prototypes.

null and undefined don't have object wrappers, so no prototypes and no methods.

String.prototype.show = function() {
  alert(this);
};
"BOOM!".show(); // BOOM!

wwo, nice ! But careful as well, prototypes are global so conflicts can happen.
Some methods mught be overwritten.
It is usually considered bad practice to modify a native.

Only one case is necessary where native prototypes is polyfillin

if (!String.prototype.repeat) { // if there's no such method
  // add it to the prototype
  String.prototype.repeat = function(n) {
    // repeat the string n times
    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}
alert( "La".repeat(3) ); // LaLaLa

we saw that we can borrow methods, we can also borrow from prototypes
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};
obj.join = Array.prototype.join;
alert( obj.join(',') ); // Hello,world!

it works here because the method does not check if the object to change is an array. many 
built in methods are like that so this is a very handy technique!

we can also inherit from obj.__proto__ to array.prototype so all array methods are autoatically available
for the obj
quie jandy!! although it is not possible if obj already inherits from another objects.

Yes multi-inheritance is not available in js, only in C++
*/