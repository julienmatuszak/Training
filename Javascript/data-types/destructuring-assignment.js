//objects and arrays are the most important objects in javascript
//they can be big though, and we may only need to pass a piece of those as arguments.
//comes in destructuring assignment, this is a special syntax that allows to unpack arrays and objects into a bunch of variables
//it is also used with complex functions with a lot of parameters
/*
let arr = ["John", "Smith"]

//destructuring assignment
//sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
alert(firstName);//John
alert(surname);//Smith
//now we can work with variables
//using split
let [firstName, surname] = "John Smith".split(' ');
alert(firstName);//John
alert(surname);//Smith

//NOTA BENE that the array is not modified
//We CAN USE EXTRA COMMAS TO AVOID ELEMENTS THAT WE'RE NOT INTERESTED IN
let [firstName,,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(title); // Consul

//THE DESTRUCTURING ASSIGNMENT WORKS WITH ANY ITERABLE ON THE RIGHT SIDE: STRINGS, SETS
let [a, b, c] = "abc"; //["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

//THE DESTRUCTURING ASSIGNMENT WORKS WITH ANYTHIN AT THE LEFT-SIDE
let user = {};
[user.name, user.surname] = "John.Smith".split(' ');
alert(user.name); // John
alert(user.name); // Smith

//Looping with .entries()
let user = {
  name: "John",
  age: 30
};
//loop over keys-and-values
for (let [key, value] of Object.entries(user)) {//because it returns an array of arrays 
  alert(`${key}:${value}`);
}

let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
alert(`${guest} ${admin}`); // pete jane, swap is successful

//The ...rest trick
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(name1);
alert(name2);

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
  alert(rest[0]); // Consul
  alert(rest[1]); // of the Roman Republic
  alert(rest.length); // 2

  let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// now titles = ["Consul", "of the Roman Republic"]

let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)

// runs only prompt for surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name);    // Julius (from array), no prompt because there is a default name
alert(surname); // whatever prompt gets


//IT ALSO WORKED WITH OBJECTS

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;//VERY HANDY!!

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

//THE ORDER DOES NOT MATTER WITH OBJECTS
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
//we assign the keys properties
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

//We can also assign directly and set default values, just like we saw with arrays
let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;//assigned default values, and EVEN ADDED PROPERTIES

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

//DEFAULT VALUES CAN BE ANYTHING, EVEN FUNCTION CALLS
let options = {
  title: "Menu"
};
let {width = prompt("width?"), title = prompt("title?")} = options;
alert(title);
alert(width);

//COLON AND EQUALITY CAN BE COMBINED
let options = {
  title: "Menu"
};
let {width: w = 100, height: h = 200, title} = options;
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

//ONLY ONE CAN BE EXTRACTED
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let { title } = options;
alert(title); // Menu

//IF THERE ARE MORE PROPERTIES THAN VARIABLES,WE USE THE ...REST 
let options = {
  title: "Menu",
  height: 200,
  width: 100
};
// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;
// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100

//WITHOUT LET, THERE IS A CATCH
let title, width, height;
// error in this line
//{title, width, height} = {title: "Menu", width: 200, height: 100};//because no let
{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}

//IF WE PUT THE CODE BLOCK IN THE 
let title, width, height;
// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});
alert( title ); // Menu

//NESTED DESTRUCTURING
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
//WE HAVE TO REASSIGN THE OPTIONS OBJECT
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

//WRONG WAY TO WRITE A FUNCTION
//function showMenu(title = "Untitled", width = 200, height = 100, items = []) {}
// undefined where default values are fine
//ANOTHER WRONG WAY TO WRITE A FUNCTION
//showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])

//INSTEAD, WE PASS PARAMETERS AS AN OBJECT
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};
// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}
showMenu(options);

let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

//THAT WORKS AS WELL WITH NESTED OBJECTS
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};
function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}
showMenu(options);

//TO PASS ALL VALUES BY DEFAULT, WE SHOULD USE AN EMPTY OBJECT
showMenu({}); // ok, all values are default
//showMenu(); // this would give an error
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}
showMenu(); // Menu 100 200

let user = { name: "John", years: 30 };
let {name, years: age, isAdmin = false} = user;
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  let {...rest} = salaries;
  for(let i in rest) {
    if (max < rest[i]) {
      max = rest[i];
      maxName = i;
    }
  }
  return maxName;
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert(topSalary(salaries));

function topSalary(salaries) {

  let maxSalary = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert(topSalary(salaries));
*/