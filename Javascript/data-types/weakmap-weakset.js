/*let john = { name: "John" };//an object is initialized
john = null;//the object is removed from memory
//BUT
let john = { name: "John" };//an object is initialized
let array = [ john ];//the object is put in an array
john = null; //the object is not removed from memory. the reference is overwritten
//the object is now stored in the array so we can access it at array[0]

let john = { name: "John" };
let map = new Map();
map.set(john, "...");
john = null; //the reference is overwritten, the object is put in the map object
//the object can be accessed via map.keys()

//this constitutes a weakmap. In a weakmap, keys can only be objects, not primitives
let weakMap = new weakMap();
let obj = {};
weakMap.set(obj, "ok"); //works fine, because the key is an object
weakMap.set("test", "Whoops"); //error because test is not an object

//with weakmap, the object can be removed from memory if nullified
let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; //the reference is overwritten AND the object is removed from memory
//Hence the term of weakmap
Weakmap does not have the methods of maps or sets, such as keys(), values(), entries(), so there is no way to get all keys and values.
These methods are not present to optimize the garbage collector, because we don't know when it will collect the object possibly removed
This is precisely why there is no count method, (size)

However, weakmap has the .get .set .delete and .has methods

THE USUAL USE CASE OF WEAKMAP IS ADDITIONAL DATA, WE WOULD LIKE TO ACCESS AN OBJECT THAT BELONGS TO ANOTHER CODE, OR A THIRD-PARTY LIBRARY
THE TIME WE USE IT, AND THEN GET RID OF IT
weakMapa.set(john, "secret documents");
//if john dies, the secret documents will be destroyed automatically

//this map is in a certain js file called visitsCount.js
let visitsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

//main.js
let john = { name: "John" };
countUser(john); // counts his visits
//later john leaves
john = null;// john object is garbage collected but remains in memory here (because it is a key in visitsCountMap object)
//visitsCountMap could be huge and still not cleant, so we need a weakmap to clean it before it grows in memory indefinitely

//visitsCount.js
let visitsCountMap = new WeakMap(); //weakmap: user => visits count

//increases the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
// now visitsCountMap will be cleant when john is

//ANOTHER BIG USE-CASE: CACHING
//caching is the fact of storing results from a function, and a function is usually meant to be reused
// cache.js
let cache = new Map();

//calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {//if the object is not in the cache map
    let result = obj; // calculations of the result for

    cache.set(obj, result);
  }
  return cache.get(obj);
}

//now we use process() in another file:
//main.js
let obj = {};//let's say we have an object
let result1 = process(obj);//calculated
let result2 = process(obj); //remember result taken from cache
obj = null;
alert(cache.size);//1 (the object is still in the cache, which is normal because here cache is a map)

//with 
let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {};

let result1 = process(obj);
let result2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well

//WEAKSET
//weakset is to weakmap what set is to map. WE CAN ONLY ADD OBJECTS TO WEAKSET
// AS LONG AS THE OBJECT IS REACHABLE, IT EXISTS
//WeakSet has the methods add, delete, but not size and keys and no iterators

//taking back the example of visitors, weakset could be used to store the unique visitors names for instance (no need to store them several times)
let visitedSet = new WeakSet();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john);
visitedSet.add(pete);
visistedSet.add(john);

alert(visitedSet.has(john)); //true
alert(visitedSet.has(mary)); // false

john = null; // automatic cleaning


let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

//to check if messages have been read, we can use a weakset. we will check in the set if the message can be found with the has function.
let readMessages = new WeakSet();
//two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
//readMessages has 2 elements
readMessages.add(messages[0]);
//readMessages still has 2 unique elements

//was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
//the negative side is that we can't get all the read messages at once

//another solution would be to store a property only known to our code
let isRead = Symbol("isRead");
messages[0][isRead] = true;
//from a structural point of view, weakSet is better
*/
//when the message was read, would be weakMap, because every value will be different so there is no chance of occurrences, hence weakSet is purposeless
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));
//date object to be studied later