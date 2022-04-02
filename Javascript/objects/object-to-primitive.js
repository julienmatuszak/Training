//objects maths manipulation are quite limited, js authorizes the conversion from obj to primitive type
//but the result cannot be an object (except for Date etc.), we will see a few interesting examples though
//A FEW RULES ON OBJECTS FOR A STARTER:
//Objects are always true(they exist)
//there is a numeric conversion with math operator
//there is a string conversion

//string examples:
/*
alert(obj);
anotherObj[obj] = 123; //obj is converted to a string

//numeric examples:
let num = Number(obj);//direct conversion
let n = +obj;//unary +
let delta = date1 - date2;//date objects
let greater = user1 > user2;//works with both strings and numeric, but takes the number hint in case of default

//default conversion examples: //in case the operator does not know what might be the result
let total = obj1 + obj2;
if( user == 1 ) {};

//hence, number is the default hint, and there are two conversions possible, with string. boolean is not a conversion
//to implement the method, we define [Symbol.toPrimitive](hint) { content of the method },
//when a conversion is needed, the hint will be found automatically depending on the conversion
//then the content of the function will be executed accordingly

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);//show what hint is used for the conversion, hint is found automatically
        return hint == "string" ? `{name; "${this.name}"}` : this.money;//if hint is a string do this, if not do that (2 choices possible)
    }
};

alert(user);//hint is string 
alert(+user);//hint is number because of the unary operator
alert(user + 500);//hint is default (which is number here)

//if there's no String.toPrimitive method, the engine will look for toString or valueOf methods.
//if the hint is string (see above), first search for toString, and then valueOf
//valueOf for the other hints, then toString.
//this is why alert(user) returns [object Object] is no String.toPrimitive, the toString is used.
//the valueof returns the object itself
//if we take a similar example to the one above, the implementation of the Symbol.toPrimitive method would be
let user = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500
  //no hint found here, the engine looks for the methods directly
  */
 //if only the toString method was implemented we would have "John" for the first call and "John500" for the last call
//NB: toString and valueof return an object not a primitive type.

//if an object is passed as an argument, it can be converted to fit the right method
let obj = {
    toString() {
        return "2";
    }
};

alert(obj * 2);//4 not 22, because the conversion returns a string, but the math operator * converts to number again
//counter-example
let obj2 = {
    toString() {
        return "2";
    }
};

alert(obj2 + 2);//because the + operator converts auto to string if one operand is a string
