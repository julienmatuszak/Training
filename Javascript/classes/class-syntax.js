/*
Classes are used because we often to create many objects of the same knid. 

class MyClass {
  constructor() {}
  method() {}
}
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// Usage:
let user = new User("John");
user.sayHi();

when new is called a new object is created the constructor runs with the given argument and assign it to this.name
and then we can call object methods

PLEASE NOTE THAT THERE IS NO COMMA BETWEEN CLASS METHODS
That is the case with objects though

So in JS is some kind of function

class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}
// proof: User is a function
alert(typeof User); // function

it creates a function named User, that becomes the result of the class declaration
The code is taken from the constructor method
Then it stores class methods,

when an object is created it takes its methods from the prototype just like F.prototype

class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}
// class is a function
alert(typeof User); // function
// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true
// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method
// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

the syntax is nice but it's also a redefinition
// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it
// 2. Add the method to prototype
User.prototype.sayHi = function() {
  alert(this.name);
};
// Usage:
let user = new User("John");
user.sayHi();

this is only functions
however, this is diffeent, first, a functin created by class is labelled with
[[isclassconstructor]]
class User {
  constructor() {}
}
alert(typeof User); // function
User(); // Error: Class constructor User cannot be invoked without 'new'
it does not work as a function we just see

class User {
  constructor() {}
}
alert(User); // class User { ... }
a string representation of a class constructor in most js engines start with class

ckass methods also are non-enumerable. a class definition sets enumerable flag to false
for all methods in the prototype.

classes also always use strict

CLASS EXPRESSION
let User = class {
  sayHi() {
    alert("Hello");
  }
};
this is an ewxample
Classes may have a name
is a class expression has a name it's visible inside the class

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};
new User().sayHi(); // works, shows MyClass definition
alert(MyClass); // error, MyClass name isn't visible outside of the class

classes can even be made dynamically on demand:
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}
// Create a new class
let User = makeClass("Hello");
new User().sayHi(); // Hello

GETTERS SETTERS
class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}
let user = new User("John");
alert(user.name); // John
user = new User(""); // Name is too short.

COMPUTED NAMES
class User {
  ['say' + 'Hi']() {
    alert("Hello");
  }
}
new User().sayHi();

CLASS FIELDs
This is a recent feature
class User {
  name = "John";
  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}
new User().sayHi(); // Hello, John!

There is an assignment of the string to the class proprerty

CLASS FIELDS ARE NOT SET ON object.prototype but on individual objects.
class User {
  name = "John";
}
let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined

EXPRESSIONS CAN BE MORE COMPLEX
class User {
  name = prompt("Name, please?", "John");
}
let user = new User();
alert(user.name); // John

BOUND METHODS WITH CLASS FIELDS
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    alert(this.value);
  }
}
let button = new Button("hello");
setTimeout(button.click, 1000); // undefined

THIS IS LOSING THIS
we saw that feature on function binding
so the solution is to pass a wrapper fucntion like setTimeOut => button.click, 1000
and then bind tghe methofds to the oject

class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}
let button = new Button("hello");
setTimeout(button.click, 1000); // hello
*/