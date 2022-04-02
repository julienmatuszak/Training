/*
we saw that __proto__ is outdated and almost deprecated
there are many other methods
Object.create    creates an empty object with given proto as prototype
Object.getPrototypeOf returns the prototype
Object.setPrototypeOf sets the prototype

let animal = {
  eats: true
};
// create a new object with animal as a prototype
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

The 2nd argument of create is the property descriptors.
let animal = {
  eats: true
};
let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});
alert(rabbit.jumps); // true

the descriptors have the same format as the property flags and descriptors.

NOW REMEMBER THIS METHOD BECAUSE IT CREATES AN EXACT COPY OF AN OBJECT
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

so we see now that we can change [[prototype]] in many ways,
another rule, don't change [[prototype]] n existing objects if speed matters

plain objects
let obj = {};
let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";
alert(obj[key]); // [object Object], not "some value"!
we cannot have the value of the key proto because it is either an object or null

as we can see that can create a lot of probs. most programmers assign object values, thinking the proto
won't be changed but that can be the case. same for toString.

how to avoid the problem
first we can switch to map for storage instead of plain objects.
Obejct can serve well, because language creators gave thought to that problem.
proto is not a property of an object
BUT AN ACCESSOR PROPERTY OF OBJECT.PROTOTYPE
THIS IS IMPORTANT TO REMEMBER

if obj.__proto__ is read or set the get set is called from the prototype that gets the [[prototype]]
a good way to do so is below:
let obj = Object.create(null);
let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";
alert(obj[key]); // "some value"
Here the object has no prototype(null), so there is no inherited get set for __proto__
it is processed as a data property

THOSE ARE CALLED PLAIN OBJECTS OR PURE DICTIONARY
but then we have to create the rest of the methods, such as toString

*/