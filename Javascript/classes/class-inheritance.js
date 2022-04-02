/*
This is the same concept as for objects. we extend another class
we create new functionality

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}
let animal = new Animal("My animal");

If we take the scheme from before, we have here the Animal class to the right 
related to the Animal.prototype (object.prototype) with the prototype property
and when a new Animal is created there is the vertical realtion from the object to 
the prototype with [[Prototype]]

SYNTAX FOR INHERITANCE BETWEEN CLASSES
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

Now we add a layer of rabbit and rabbit.prototype, so we have 2 classes to the left
and the prototypes on the right side, and the object is new Rabbit at the bottom.

we find the usual scheme, just like Date.prototype.[[Prototype]] is Object.prototype
function f(phrase) {
  return class {
    sayHi() { alert(phrase); }
  };
}
class User extends f("Hello") {}
new User().sayHi(); // Hello
ONCE AGAIN THE SYNTAX IS VERY FREE AND ALLOWS TO GENERATE AN EXPRESSION AFTER EXTENDS
WE CAN SEE THAT THE ARROW UPWARDS WITH [[Prototype]] REPLACES EXTENDS

OVERRIDING A METHOD
class Rabbit extends Animal {
  stop() {
    // ...now this will be used for rabbit.stop()
    // instead of stop() from class Animal
  }
}

HOW do we do when we don't want to totally replace a parent method, but rather to build
on top of it to tweak or extend its functionality.
TO CALL A PARENT METHOD WE USE THE super() method.
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }

}
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

MEMO about arrow methods, well, they DON'T HAVE SUPER METHODS
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
  }
}
// Unexpected super
setTimeout(function() { super.stop() }, 1000);

OVERRIDING CONSTRUCTOR
This is a well known feature in c++ python etc.
In the ex above, Rabbit did not have its own constructor
if a class extends and has no constructor, this is what hapens:
class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}
it calls the parent constructor and passes all the arguments
if we add a custom constructor:
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}
class Rabbit extends Animal {
  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}
// Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.
THIS RAISES AN ERROR
Well, this is a weird feature of js
but constructors in inheriting classes must call super before this.

class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}
// now fine
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10

CLASS FIELDS CAN ALSO BE OVERRIDEN
class Animal {
  name = 'animal';
  constructor() {
    alert(this.name); // (*)
  }
}
class Rabbit extends Animal {
  name = 'rabbit';
}
new Animal(); // animal
new Rabbit(); // animal

Super:internals, [[HomeObject]]

*/