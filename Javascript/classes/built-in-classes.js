/*
Array, Map are built in classes and extendable

// add one more method to it (can do more)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}
let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false
let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false

methods like filter already seen return new objects like PowerArray
they use the constructor object
arr.filter is called it creates a new array like arr.constructor
not array. that's powerful because we can keep powerarray methods.
and we can customize, add a getter symbol.species

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
  // built-in methods will use this as the constructor
  static get [Symbol.species]() {
    return Array;
  }
}
let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false
// filter creates new array using arr.constructor[Symbol.species] as constructor
let filteredArr = arr.filter(item => item >= 10);
// filteredArr is not PowerArray, but Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function

same for map and set

no static inheritance in built ins
they have their own static methods like keys isarray
native classes extend object
static and nonstatic extend but static no for built in
array and date inherit object their instance have methods like prototype
but not [[prototype]] doesnot reference object so there';s no keys static method

it's the same as the scheme we saw
the object and date are on the left and linked with prototype to the right
and the instance gets everything.


*/