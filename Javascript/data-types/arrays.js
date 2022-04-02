//arrays are indexed objects, it stores ordered collections
//it is instantiated directly from the class Array or with brackets
//alert(array) returns the whole content of the array
//arrays can be a mix of value
/*let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

alert(arr[1].name);'john'

//arrays can end with commas or nothing

//there are plenty of interesting methods, let's see a few. pop push shift unshift
//push appends an element, shift removes the 1st element and returns it, unshift add element(s) at the 
//beginning and pop extracts the last element of the array and returns it. 

//THE BRACKETS TO ACCESS A PROPERTY , FOR INSTANCE arr[0], COME FROM THE OBJECT SYNTAX, BASICALLY THE S
//SAME AS obj[key] and numbers are used as key
//ARRAYS ARE COPIED BY REFERENCE
let fruits = ["Banana"]
let arr = fruits; // copy by reference (two variables reference the same array)
alert( arr === fruits ); // true
arr.push("Pear"); // modify the array by reference
alert( fruits );//references the same object as arr

//what makes arrays good and optimizable is the fact that they are stored in contiguous area of memory,
//which makes them easy to reach and fast to access
//ANOTHER INTERESTING FACT IS THAT BECAUSE IT IS AN OBJECT, IT CAN STORE PROPERTIES, THE CODE BELOW IS VALID:
let fruits = []; // make an array
fruits[99999] = 5; // assign a property with the index far greater than its length
fruits.age = 25;//?!
alert(fruits.length);//1000000
//this is bad practice and misuse, so it's recommended not to add any property and not to leave holes in the array
//nor is it recommended to fill an array backwards
//AN IMPORTANT PRACTICE IS TO USE METHODS LIKE UNSHIFT OR POP because the orders of the arrays are not rearranged

//Arrays can be iterated essentially with 3 methods: for loop , for let of, and for let in
let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}


for (let i of arr) {
  alert( i );// Apple, Orange, Pear
}

for (let key in arr) {//method for an object, but probably not optimized for arrays
  alert( arr[key] ); // Apple, Orange, Pear
}
//the last one also iterates through all properties so it can reduce performance


//AN INTERESTING PROPERTY OF LENGTH: IT IS WRITABLE
let fruits = [];
fruits[123] = "Apple";
alert( fruits.length ); // 124

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // return length back
alert( arr[3] ); //undefined, because the values in the memory have been garbage collected

//new Array() is not liked because it can prove tricky
let arr = new Array("Apple", "Pear", "etc");//we have to enter everything

let arr = new Array(2); // will it create an array of [2] ? hint: nope
alert( arr[0] ); // undefined! no elements.
alert( arr.length ); // length 2

//ARRAYS CAN BE MULTIDIMENSIONAL (MATRIXES)
//ARRAYS HAVE THEIR OWN IMPLEMENTATION OF toString (used for instance with alert())

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, the central element

let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
alert( [] + 1 ); // "1" = null + "1"
alert( [1] + 1 ); // "11" because arr[0] is 1
alert( [1,2] + 1 ); // "1,21" because arr is 1,2

//ARRAYS DO NOT HAVE Symbol.toPrimitive
//ARRAYS CANNOT BE COMPARED WITH THE OPERATOR ==

alert([] == []);//false
alert([0] == [0]);//false
//un both cases, 2 objects are created

//however,
alert( 0 == [] );//true because the conversion leads to an empty string that evaluates to 0
alert( '0' == []);//false because '0' is not an empty string

//INSTEAD, WE COMPARE ONE BY ONE WITH LOOPS FOR INSTANCE

styles = ["Jazz", "Blues", ];
styles.push("Rock-n-Roll");
styles[Math.round(styles.length/2-1)] = 'Classics';
alert(styles.shift());
styles.unshift("Rap", "Reggae");
alert(styles);

let arr = ["a", "b"];

arr.push(function() {//this does not define a function but just ADDS A FUNCTION TO THE ARRAY
  alert( this );
})

arr[2](); //() calls the function that alert(arr), it will just display the whole content of the array
//and the whole content, comments included, of the function

let arr = [];
function sumInput(arr) {
  let sum = 0;
  let a = prompt("add a value: ", 0);
  while((a != null) && isFinite(a) && a!= "") {
    arr.push(+a);
    a = prompt("add a value: ", 0);
  }
  for(let i in arr) {
    sum += arr[i];
  }
  return sum;
}

alert(sumInput(arr));
alert(arr);

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert( sumInput() );

function getMaxSubSum(arr) {
  let max = 0;
  for (let i of arr) {
    if ( max < i ) {
      max = i;
    }
  }
  let sum = 0;
  for (let i of arr) {
    if ( (sum > 0) && (sum + i < 0) ) {
      break;
    }
    if( (sum + i >= 0)) {
      sum += i;
    }
  }
  return (max > sum) ? max : sum;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
//BETTER
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

//splice
//the delete command removes the element wherever in an array, but does not reduce its length.
//in comparison, splice will trim the array

let arr = ["I", "study", "Javascript"];
arr.splice(1, 1);//from index 1 removes 1 element
alert( arr ); //I, Javascript

let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");//replacing where it stopped
alert( arr ) // now ["Let's", "dance", "right", "now"]

let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice(0, 2);//the element or the array of elements is returned
alert( removed ); // "I", "study" <-- array of removed elements

let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert( arr ); // "I", "study", "complex", "language", "JavaScript"

//works with negative indexes
let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);//we are at index -1, so at 5, but 5 is not counted for insertion, it is shifted to the right
alert( arr ); // 1,2,3,4,5

//slice is similar to the method for strings. it returns what was sliced
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3 (excluded)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end because no 2nd argument is given

//concat, same as for strings, it concatenates arrays
let arr = [1, 2];
// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6, oyou can concat several arrays
// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6, basically works the same

let arr = [1, 2];
let arrayLike = {
  0: "something",
  length: 1
};
alert( arr.concat(arrayLike) ); // 1,2,[object Object]
//if it's not exactly an array but looking like one, it will insert what it is, an object

//the exception being when there is a key including Symbol.isConcatSpreadable
let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr.concat(arrayLike) ); // 1,2,something,else
//the elements values of the keys are added (just like adding an array)

//THE METHOD FOREACH is great as it allows to run a function for every element in an array
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

//search functions indexOf/lastIndexOf/includes, same as with strings
let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1, careful not to mix both, it gets a value and returns an index
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true, same as with strings

//problem with NaN because it uses the === comparison
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
alert( arr.includes(NaN) );
//DO NOT USE indexOf or lastIndexOf WITH NaN

//great search tool : find / findIndex
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});//here the function is returned
//IF NOTHING IS FOUND, UNDEFINED IS RETURNED
let users = [ {id: 1, name: "John"}, {id: 2, name: "Pete"}, {id: 3, name: "Mary"} ];
let user = users.find(item => item.id == 1);//returns the object found according to the criteria in parentheses
alert(user.name); // John

//findIndex returns the index or -1 if nothing is found
//filter
//it is essentially the same as find, but will return all the occurrences of an element, where find will only return the first element

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
})

let users = [ {id: 1, name: "John"}, {id: 2, name: "Pete"},  {id: 3, name: "Mary"} ];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);//returns the array of the two first indexes
alert(someUsers.length); // 2

//map is A VERY INTERESTING METHOD that allows to reorganize an array or define new arrays according to a rearrangement function
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

//the sort function rearranges the array according to an algorithm, compares the first digits, then the 2nd, etc.
let arr = [ 1, 2, 15 ];
// the method reorders the content of arr
arr.sort();
alert( arr );  // 1, 15, 2

//that's because they are arranged as strings. To arrange as numbers, we need to implement a function as an argument of the sort method
function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}
//we don't need to know how the sorting works, different algo can be implemented depending on a few param
//but the bottom line is, if you return 1 you don't sort, if you return -1, you sort
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15

let arr = [1, -2, 15, 2, 0, 8];
arr.sort(function(a, b) {
  alert( a + " <> " + b );//we can see how the sort algorithm is processed
  return a - b;
});
alert(arr);
//the algo is optimized to have the least comparisons possible

//THE ARROW FUNCTION IS ACTUALLY THE NEATEST WAY
let arr = [1, -2, 15, 2, 0, 8];
arr.sort( (a, b) => a - b );
alert(arr);

let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)//correct if we consider than Ö is after
alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct! as ö is considered like O)
//in the latter, we don't even need to use the comparison operator, as it is included in the function localeCompare

//reverse: pretty self-explanatory
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

//split and join ARE VERY USEFUL METHODS, turning strings to arrays and vice versa
let names = "Bilbo, Gandalf, Nazgul";
let arr = names.split(", ");
for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
//the 2nd argument of the method limits the number of elements in the array
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr); // Bilbo, Gandalf

//the split method works on strings!
let str = "test";
alert( str.split('') ); // t,e,s,t

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // glue the array into a string using ;
alert( str ); // Bilbo;Gandalf;Nazgul

//we can iterate over an array with for (normal), forEach(to add a function), for of (optimized) and even for in although it is not recommended
//to return the data for each element, in case of objects for instance, wr can use map
//the methods reduce and reduceRight iterate but only return a value
// the method is essentially an algorithm: reduce(function(accumulator, item, index, array)
//the accumulator will get the values iterated, the item is the current array item studeid, the index and array can be added
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15, the first loop sum equals the last argument and is added to current, 2nd loop adds the next item (2, then 3 then 4 then 5)
//let result = arr.reduce((sum, current) => sum + current); in that particular case, there is no need for initial value, result is the same
//reduceRight goest from right to left instead

//btw, typeof does not distinguish arrays from object
//we use a method isArray instead
alert(typeof {}); // object
alert(typeof []); // same
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

//most methods except sort accept thisArg as a 2nd argument. thisArg becomes this for the function included in the array method
let army = { minAge: 18, maxAge: 27, canJoin(user) { return user.age >= this.minAge && user.age < this.maxAge; } };
let users = [{age: 16},{age: 20},{age: 23},{age: 30}];
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
*/
//there are plenty of other useful methods
//some / every checks the array with a certain condition
/*
function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}
alert( arraysEqual([1, 2], [1, 2])); // true

//fill(value, start, end)
//copyWithin(target, start, end), copies a 'string' of values, starting at a certain target
//flat flatMap creates a one-dimensional array or map from a matrix (multidimensional array)

function camelize(str) {
  let arr = str.split("-");
  for (let i = 1; i < arr.length; ++i) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  str = arr.join("");
  return str;
}

alert(camelize("background-color"));
alert(
  camelize("list-style-image"));
alert(camelize("-webkit-transition"));

//BETTER
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

//all the methods are combined in the right order, first split, then map to use the special function(better than methods)
//then join to return the string
//REMEMBER THAT IF YOU WANT TO APPLY A FUNCTION TO ALL MEMEBERS, USE MAP!!!

function filterRange(arr, x, y) {
  let arr1 = arr.filter(item => item <= y && item >= x);
  return arr1;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > b || arr[i] < a) {
      arr.splice(i, 1);
      --i;//because it deletes an element of the array
    }
  }
  return arr;
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

let arr = [5, 2, 1, -10, 8];
//arr.sort();
//arr.reverse();
//the method above is very costly
//better use
arr.sort((a, b) => b - a);//instead of a - b to sort it in increasing order, remember that we just need one rule of sorting
alert( arr ); // 8, 5, 2, 1, -10

function copySorted(arr) {
  let arr1 = []
  for(let i of arr) {
    arr1.push(i);
  }
  arr1.sort();
  return arr1;
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
//A GREAT WAY TO COPY AN ARRAY IS TO USE SLICE WITH NO ARGUMENTS!!!!!
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted );
alert( arr );


function Calculator(str){
  this.methods = {//so we create an object instead of an array, because we can iterate it
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }
  this.calculate = function(str) {//must calculate and return the evaluation of an expression, so it could apply the function that is added with the other method
    let arr = str.split(" ");
    let a = +arr[0], b = +arr[2];
    return this.methods[arr[1]](a,b);
  };
  this.addMethod = function(str, func) {
    this.methods[str] = func;
  };
}

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);//only adds the method, but does not calculate
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

/*ANOTHER POSSIBLE SOLUTION (WITH ERROR HANDLING)
function Calculator() {
  this.methods = {//the initial calculation methods, then we will add the others
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  this.calculate = function(str) {
    let split = str.split(' '),//we split the string with only one space, as this is the constraint
      a = +split[0],
      op = split[1],//operator
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {//error handling if one is not a number or if the operator does not exist (is not included), we return NaN
      return NaN;
    }

    return this.methods[op](a, b);//otherwise, we apply the method, the parentheses is the function call with a and b
  };

  this.addMethod = function(name, func) {//to add a method, a simple property declaration will do
    this.methods[name] = func;
  };
}
*/
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];


let names = [];
for (let i = 0; i < users.length; ++i) {
  names.push(users[i]["name"]);
}

//THERE IS A BETTER SOLUTION HERE, LOOK IDIOT!! YOU HAVE TO ITERATE THROUGH EVERY OBJECT SO USE MAAAAAAP
let names = users.map(item => item.name);//we just map their properties

alert( names ); // John, Pete, Mary


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(item => ({fullName: item.name + " " + item.surname, id: item.id}));
console.log(usersMapped);
/* ANOTHER POSSIBLE SYNTAX IS TO USE THE BACKTICKS
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
*/
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

alert( usersMapped[0].id ); //1
alert( usersMapped[0].fullName ); //John Smith

function sortByAge(arr) {
  arr.sort((a,b) => a.age - b.age);// just like for every algorithm used in the sort function, we just need the rule of sorting
  return arr;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); //John
alert(arr[1].name); //Mary
alert(arr[2].name); //Pete
*/
/*function shuffle(arr) {
  return arr;
}
/*
function shuffle(arr) {
  let max = arr.length;
  let arr2 = [];
  for (let i = 0; i < max; ++i) {
    let rand = - 0.5 + Math.random() * (arr.length);
    arr2.push(arr.splice(Math.round(rand), 1));
  }
  return arr2;
}
*/
/*
//MUCH BETTER
function shuffle(array) {
  array.sort(() => Math.random() - 0.5); //no need to round just to have the right span
  //no need to splice and do all the mess above, the sorting algorithm takes that into account by 
  //dismissing values that have been already entered
  return array;
}

let arr = [1, 2, 3];
console.log(shuffle(arr));
*/
/*
function getAverageAge(arr) {
  let arr2 = arr.map(item => item.age);
  return arr2.reduce((sum, current) => (sum + current))/arr2.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [john, pete, mary ];
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function unique(arr) {
  let arr1 = [];
  for (let i of arr) {
    if (!arr1.includes(i)) {
      arr1.push(i);
    }
  }
  return arr1;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

function groupById(users) {
  return users.reduce((acc, obj) =>{
    acc[obj.id] = obj;
    return acc;
  }, {});
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);

// after the call we should have:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/