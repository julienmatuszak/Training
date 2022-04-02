/*
we can only inherit from single object
only one [[prototype]] for an object
and a class may extend only one class

we can use mixins to mix classes without multuple inheritance

// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};
// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

this is method copying, not inheritance User uinherits from another class
and gets a mixin method


let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};
let sayHiMixin = {
  __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)
  sayHi() {
    // call parent method
    super.say(`Hello ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Bye ${this.name}`); // (*)
  }
};
class User {
  constructor(name) {
    this.name = name;
  }
}
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

the diagram to explain that is:

saymixin on top is the object on top at the bottom the object inheriting sayhimixin
to the left is user.prototype that is related with homeobject not prototype
at the bottom is the instance

irl we use eventmixin

let eventMixin = {
   Subscribe to event, usage:
    menu.on('select', function(item) { ...  
   on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  }, 
    Cancel the subscription, usage:
    menu.off('select', handler)   
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  }, 
    Generate an event with the given name and data
     this.trigger('select', data1, data2);   
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return; // no handlers for that event name
    }
    // call the handlers
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};

on assigns handler function
off removes it
trigger generates the event

USAGE
// Make a class
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();
// add a handler, to be called on selection:
menu.on("select", value => alert(`Value selected: ${value}`));
// triggers the event => the handler above runs and shows:
// Value selected: 123
menu.choose("123");
*/