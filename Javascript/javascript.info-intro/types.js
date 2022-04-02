//javascript is dynamically typed
let message = "hello";
message = 12345;

let n = 123;
n = 12.345;

//alert(1/0);
//alert(-1/0);
//alert(0-"r");//maths operation always work, no error here, shows NaN

//undefined means that the value is not assigned
let age;
//alert(age);//no error here, shows undefined

let none = null;
//alert(none);//no error here, shows null

//objects are non-primitive types because they can store several values, collections of data

//typeof works as an operator or a function
//typeof null;//null is an object but it's actually more like a value
//typeof(0);
//typeof alert; //alert is a function
//typeof Math;//Math is an object
//other types include number, bigint, string, boolean, symbol

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name
alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya