/*
so new objects can be created with a constructor like new
if F.prototype is an objectm then new uses it to set [[Prototype]]

F.protoype here signifies a regular property named prototype on F.

let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal; // this means when a new rabbit is created its prototype assigned is animal
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal because we just constructed it
alert( rabbit.eats ); // true

now we see that we have the 2 different prototype, the one inherited, for examp[le] rabbit animal
and the function related to animal with .prototype and auto assigned every inherited object.

Careful not to mix both!
F.prototype is only used at new F time only when F is called like here with let rabbit. If we change F.prototyp after
new F is called then all the new objects will have another object as [[Prototype]].

The already existing objectsw keep the old one.

Default F.prototypem constructor property
everry function has the prototype property even if not supplied

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
alert( Rabbit.prototype.constructor == Rabbit ); // true

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (from prototype)

constructor assigns from the default prototype (here animal to the function )
every object instantiated will automatically inherit the constructor of the function

function Rabbit(name) {
  this.name = name;
  alert(name);
}
let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");

this comes in handy when there is an object and we don;t know which constructor was usd for it (coming from a library for instance)
and we need to reate another one of the same kind/.

BUT JAVASCRIPT DOES NOT ENSURE THE RIGHT CONSTRUCTOR VALUE
It exists in the default prototype for functions bvut thata all

function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};
let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

we see once again that this is a very free syntax here. here rabbit has beend defined a new prototype function
so the constructor does not belong to it.

To keep the right constructor we can choose to add remove properties to the default prototype
instead of overwriting it as a whole

function Rabbit() {}
// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved

or recreate the constructor property manually
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};
// now constructor is also correct, because we added it
*/