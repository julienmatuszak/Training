/*
There are two kinds of object properties.We've been studying the first king, data properties.
The second is accessor properties, those are getters and setters. They are functions that get and
set values of properties.

Here is a definition of a getter:
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
alert(user.fullName); // John Smith

If we attempt to modify the property, there will be an error without a setter.

let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
// set fullName is executed with the given value.
user.fullName = "Alice Cooper";
alert(user.name); // Alice
alert(user.surname); // Cooper

now the property can be set.

Accessor descriptors
Those are different than the descriptors for data properties
there are four of them set get enumerale and configurable
They use the method defineProperty

let user = {
  name: "John",
  surname: "Smith"
};
Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});
alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname

A property can eithe be a get or a set not both (it can also be a data property)

This will lead to an error:
// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
  get() {
    return 1
  },

  val: 2
}); // Error

smarter getter/setter
Those can be used as wrapper of real property values 
for example, if we want to fobid short names for users:

let user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};
user.name = "Pete";
alert(user.name); // Pete
user.name = ""; // Name is too short...

We have used the syntax _ for the object property, to signal that should stay an internal property and should not be used
We use the same convention for python (programs that do not allow the keys public private etc).

Getters and setters are very useful to tweak real properties

function User(name, age) {
  this.name = name;
  this.age = age;
}
let john = new User("John", 25);
alert( john.age ); // 25

Age changes. Instead, we choose a birthday
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}
let john = new User("John", new Date(1992, 6, 1));

This is the new code, but we may still have to use the old code. What do we do? We use a getter:

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}
let john = new User("John", new Date(1992, 6, 1));
alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age
*/