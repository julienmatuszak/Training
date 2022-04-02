/*
We saw object properties as 'keys' in an object
But they are more powerful than that.

Property flags
Object properties have 3 flags, those are 3 values:
writable, if true, they can be rewritten
enumerable, if true, they can be listed,
configurable, if true, they can be deleted and attributes can be modified.

getOwnPropertyDescriptor allows to query the full information of a prpoerty.

let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  alert( JSON.stringify(descriptor, null, 2 ) );
   property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }

  let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
The first example is allows all the default values to be true. The second shows that is propertie are not defined,
they are false by default.

Another way to make properties be falsy is shown below:

let user = {
  name: "John"
};
Object.defineProperty(user, "name", {
  writable: false
});
user.name = "Pete"; // Error: Cannot assign to read only property 'name'
In this case, the name is not changeable.
Careful, because errors won't appear is we try to rewrite the name is no strict mode

let user = { };
Object.defineProperty(user, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});
alert(user.name); // John
user.name = "Pete"; // Error

Non-enumerable property

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};
// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};
Object.defineProperty(user, "toString", {
  enumerable: false
});
// Now our toString disappears:
for (let key in user) alert(key); // name to String is gone!!

same for they keys method.
alert(Object.keys(user)); // name


non-configurable

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
Math.PI = 3; // Error, because it has writable: false
// delete Math.PI won't work either
We also can’t change Math.PI to be writable again:

// Error, because of configurable: false
Object.defineProperty(Math, "PI", { writable: true });
NB: WE CAN CHANGE THE NAME OF THE PROPERTY, HERE PI FOR INSTANCE

let user = {
  name: "John"
};
Object.defineProperty(user, "name", {
  configurable: false
});
user.name = "Pete"; // works fine
delete user.name; // Error


let user = {
  name: "John"
};
Object.defineProperty(user, "name", {
  writable: false,
  configurable: false
});
// won't be able to change user.name or its flags
// all this won't work:
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", { value: "Pete" });

only writer is changeable to true or false.

Object.defineProperties, allows to define several properties at once.
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

How do we do when we clone ojects:
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
Normally when we clone an object, we use an assignment to copy properties, like this:
for (let key in user) {
  clone[key] = user[key]
}
The clone does not copy the property rights. So we should always prefer defineProperties.

Property descriptors work at the level of individual properties.

There are also methods that limit access to the whole object:

Object.preventExtensions(obj)
Forbids the addition of new properties to the object.
Object.seal(obj)
Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze(obj)
Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
And also there are tests for them:
Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj)
Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj)
Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
These methods are rarely used in practice.
 */
