//iterable objects are a way to make every object behave like arrays (or strings for that matter), that means that we can iterate them with
//the for..of loop
//1st method Symbol.iterator
//an iterator is an object that contains a next method
//a simple range is easily iterable
/*let range = {
  from: 1,
  to: 5
};//the for of will give 1,2,3,4,5
//in that case, we can use a Symbol.iterator where we define properties and methods (especially next)
//it goes with 4 steps: 1- the iterator is called when for of starts, 2- for of returns the object or works on it beforehand
//3- for of calls the next method to get the next value, 4- the form of next is {done: Boolean, value: any},
//done true means the loop is finished, otherwise value is the next value
range[Symbol.iterator]= function() {//syntax to know that when range is called, the Symbol.iterator method will apply
//returns the iterator object
// for of works only with this iterator and asks for the next value
  return {
    current: this.from,//the properties defined inside the range object
    last: this.to,

    next() {//function called for each iteration
      if (this.current <= this.last) {//the last value
        return { done: false, value: this.current++};//we keep looping and we increment current and return the object
    } else {
      return { done: true };
    }
    }
  }; //we defined a function object as well
};//we defined an object (even if function) so we close the object

for (let num of range) {
  alert(num);
}
*/
//Both the object and the method could be merged technically speaking
// The problem with that method is that we cannot call it several times at the same time, as the iterator would override each other
//technically speaking, infinite iterators are also possible, as we can define range.to = Infinity

//iteration of strings
//strings are iterable (see before)
//implementation of a string iterator
/*let str = "Hello";
//does the same as 
//for (let char of str) alert(char);
let iterator = str[Symbol.iterator]();
while(true) {
  let result = iterator.next();
  if (result.done) break;
  alert (result.value);//outputs character one by one
}//this is basic here but we can now manipulate the characters by adding statements in the loop for instance

//There is a subtle difference between iterables and array-likes, iterables iterate through objects, whether they have indexes or not
//range above is an object that is iterable (we did it, we can use let of on it) but have no indexes, so is not array-like
//array-like objects, are indexed objects. they also have a length (on the contrary of objects)
//btw, some objects are both, like strings
//also an interesting fact is that an array-like may not be iterable
//EXAMPLE BELOW:
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
//for (let item of arrayLike) //impossible to use this method, a for ..in would do though

//unfortunately both these types of objects are not arrays, so we cannot use all the handy methods on them,
//we can use similar methods however

//Array.from
//is a universal method from the class Array, it takes an iterable and makes a 'real' array. so we can call the methods on it
let arr = Array.from(arrayLike);
alert(arr.pop());//we still cannot use the loops but we can use pop()
//from range above, the same can be done let arr = Array.from(range); alert( arr );1,2,3,4,5

//There is also a map function that allows to rearrange the array with a thisArg feature
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
let arr = Array.from(range, num => num * num);
alert(arr);

//same can be done for strings of course
let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

is basically the equivalent of 
let str = '𝒳😂';
let chars = []; // Array.from internally does the same loop
for (let char of str) {
  chars.push(char);
}
alert(chars);

and for surrogate characters, we can override a slice function
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}
let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// the native method does not support surrogate pairs
alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)
*/

