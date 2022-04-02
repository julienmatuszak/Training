/*
It is very frequent to extend some objects. For example rights for user and admin are modified variants
We want to reuse what we have in user, not copy and reimplement their methods
Comes in prototypal inheritance

objects have a special hidden property [[Prototype]], that is either null or references to another object.
That object is called a prototype.

When we read a property from object and it's missing, js auto takes it from prototype.
We call that prototypal inheritance.
This property is internal and hidden, but it's possible to set it.

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

btw, we see that there is a double underscore that refers to something internal

if we read a property from rabbit, and it's missing, js will auto take it from animal

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal; // (*)
// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true

here animal is the prototype of rabbit or rabbit prototypically inherits from animal

If animal has many prop meth they become automatically abvailable in rabbit.

a method on animal can be called on rabbit

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
// walk is taken from the prototype
rabbit.walk(); // Animal walk

The chain can be longer and rabbit can be a prototype of, say, longEar

js auto looks for it in every chain of prototype.

2 important things:
-references can't go in circles. js will throw an error
- __proto__ is an object or null
actuall __proto__ is a historical getter setter for [[Prototype]] property
__proto__ property is outdated. but it's not recomended to be used.
it's better to use object.getPrototypeOf/Object.setPrototypeof functions instead the get/set

let animal = {
  eats: true,
  walk() {
    this method won't be used by rabbit 
  }
};
let rabbit = {
  __proto__: animal
};
rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};
rabbit.walk(); // Rabbit! Bounce-bounce!

now rabbit will use the functoin walk without using the prototype

let user = {
  name: "John",
  surname: "Smith",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
let admin = {
  __proto__: user,
  isAdmin: true
};
alert(admin.fullName); // John Smith (*)
// setter triggers!
admin.fullName = "Alice Cooper"; // (**)//getter triggers
alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected

we see that accessors can work the same

the value of this

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};
let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};
// modifies rabbit.isSleeping
rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)

we see that the prototype does not have the function this is normal
other objects would also, this stores only in the objects not the prototype

for..in loop
it works over inherited properties
let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps, does not return prototype functions
// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats, returns prototype functions

we can also exclude inherited property, there's a built-in method obj.hasOwnProperty(key)

let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}

btw, the method itself is inherited, from object prototype hasownproprety
so it should appear in the list of inherited methods, but it is not an enumerable by default
we see now the interest of those properties.

almost all other key value getting methods ignore inherited properties
they only operate on the object itself properties from prototye are not taken into account.
*/