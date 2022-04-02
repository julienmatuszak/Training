//the symbol type is the 2nd type possible for a key
//the first is string, as seen before (especially with the [])
/*let id = Symbol();

//it can have a description as well
let id = Symbol("id");
//their interest is their unicity, they can have the same description though
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2);//false

//symbol is one of the rare objects that cannot be converted to a string automatically
let id = Symbol("id");
alert(id);//error type
//they can be converted with the .toString() method though
alert(id.toString());//Symbol(id) will be shown
//and their description can as well (that is its interest) with the keyword description
alert(id.description)

//symbols are hidden keys
let user = {
    name: "John"
};

let id = Symbol("id");
user[id] = 1; //a property is created with the hidden key id.
alert ( user[id] );//1
//we see the interest now, we have a safe way to create properties that would not override others, since symbols and strings are guaranteed to be different

//in an object literal, symbols are declared WITH BRACKETS []
let id = Symbol("id");

let user = {//object literal
    name: "John",
    [id]: 123
};

//the facts that they are hidden makes them avoided by loops
let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 123
};
for (let key in user) alert(key);// name and age only

//but access with the []
alert( "Direct: " + user[id]);

//same with Object.keys[object] method
//however, cloning duplicates the symbols as well
let id = Symbol("id");
let user = {
    [id]: 123
};

let clone = Object.assign({}, user);//nothing will be assigned
alert(clone[id]);//123
//kinda normal if we want a clone

//global symbols can be accessed, we say read, from everywhere.
//they are read with the for key. If they don't exist in the global registry, they are auto created
let id = Symbol.for("id");//does not exist so id is created
let idAgain = Symbol.for("id");//read the same description because it already exists then idAgain is the same as id(a bit like objects)
alert ( id == idAgain );//true

//careful the for key returns the symbol (here id or idAgain), the opposite keyword is called keyFor
//it returns the description of the symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
alert( Symbol.keyFor(sym));//name
alert( Symbol.keyFor(sym2));//id
*/
//that only works for global symbols as the engine has to look for the key to find the symbol
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) );//name
alert( Symbol.keyFor(localSymbol) );//undefined
//but
alert( localSymbol.description );//name

//there are plenty of interesting methods for symbols:
//hasInstance, isConcatSpreadable, iterator are pretty self-explanatory
//toPrimitive allows to describe an object with the help of primitive conversion