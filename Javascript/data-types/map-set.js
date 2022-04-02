// a map is an object where they keys can be of any type
//we'll study those today
/*
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size - return the element count

let map = new Map();
map.set('1', 'str1');//'1' is a string key
map.set(1, 'num1');//1 is a numeric key
map.set(true, 'bool1');//true is a boolean key
map.set({}, 'obj');

alert(map.get(1));
alert(map.get({}));//undefined, probably because the key is undefined
alert(map.size);

//maps are objects, so technically it is possible to set the value with the command map[key]
//but this is not best practice

//map can use objects as keys
let john = { name: "John" };
// for every user, let's store their visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
alert( visitsCountMap.get(john) ); // 123

//THAT'S THE WHOLE INTEREST OF MAPS, AS WE CANNOT USE REGULAR OBJECTS TO HAVE OBJECTS AS KEYS
let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
alert( visitsCountObj["[object Object]"] ); // 123//keys are stored as "object Object", what is the way alerted when we try to use an object as a key

//Map compares keys with a different algorithm than strict equality, called SameValueZero, this algorithm
//allows to compare NaN to NaN (they will be equal) so NaN can be used as map keys
//chaining calls are available
let map = new Map() .set(1, "1")
                    .set("1", "1");

//maps can be looped over their map.keys(), map.values() or map.entries() (what for..of does)
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

//insertion order is kept and forEach method can be used, just the same as arrays
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

//maps can be initialized with an array of key value pairs, just like the example below:
// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);
alert( map.get('1') ); // str1
//to initialize with an object, the method Object.entries() must be used
let obj = {
  name: "John",
  age: 30
};
let map = new Map(Object.entries(obj));
alert( map.get('name') ); // John

//conversely, an object can be created from a map, either directly from initialization of the object
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
//either from a map already created, just like the example below:
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); // make a plain object (*)
// done!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2
//we can also omit entries: let obj = Object.fromEntries(map); // omit .entries()

//a set is similar to a map, simply the same values are not used twice and no need to enter the keys, just the values
//the methods are the same as for map
//a set can be iterated with new Set(iterable) as an iterable can be created from its initialization
//the set.add value replaces the set method, as there can only be a unique value, and the method returns the whole set
//delete, has, clear, size are basically the same implementation
//
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3
for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
//set could be imitated as an array with the find method, but the search for uniqueness method in set is much better optimized

//sets are not indexed so we can use the method forEach, already valid for arrays and maps, or the method let ..of
let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) alert(value);
// the same with forEach:
set.forEach((value, valueAgain, set) => {//the fact that we have to add values twice shows the closer aspect to map
  alert(value);
});

function unique(arr) {
  return arr1 = Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));
alert( unique(values) ); // Hare, Krishna, :-O

function aclean(arr) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = arr[i].toLowerCase();
    let arr1 = arr[i].split('');
    arr1.sort();
    arr[i] = arr1.join("");
  }
  arr.sort();
  return arr1 = Array.from(new Set(arr));
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
function aclean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }
  return Object.values(obj);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
*/