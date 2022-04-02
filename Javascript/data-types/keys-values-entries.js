//keys values and entries are used with maps arrays and sets. this is why foreach works for them
// they are not used for objects, weaksets and weakmaps, although objects have equivalents that we study here
//They are called Object.keys(obj), Object.values(obj), Object.entries(obj)
//On the contrary of the same method names for maps arrays and sets. object.keys() values and entries return the arrays directly!! which will make them I believe useful
/*let user = {
  name: "John",
  age: 30
};
alert(Object.keys(user));//["name", "age"]
for (let value of Object.values(user)) {
  alert(value); //John, then 30
}
//these methods IGNORE SYMBOLIC PROPERTIES SUCH AS ITERATORS
//This is important to know

//to transform an object, the model is to get the array of entries with Object.entries, modify it with map for instance, and then use the method Object.fromEntries to make a new object
let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};

let doublePrices = Object.fromEntries(
  //convert prices to array, map key value pair into another pair then gives back the object
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])//we have an array of arrays
);
console.log(doublePrices);//we have the object

function sumSalaries(salaries) {
  let sum = 0;
  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum; // 650
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert( sumSalaries(salaries) ); // 650

function count(user) {
  return Object.entries(user).length;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
*/