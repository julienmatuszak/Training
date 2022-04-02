//"use strict";
//7 primitive types: string, number, null, undefined, bigint, boolean, symbol
//object: primitive types and functions can be properties
//primitives can be sometimes considered as objects, because we would like to use methods on them, such as put all letters in a string in upper case for instance
//in order to do that, we define superclasses like String, Number, Boolean and Symbol, whose methods can be implemented on primitives
/*let str = "Hello";//still a primitive
alert( str.toUpperCase() );//on which we implemented a method, here HELLO
//what happened here is that a temporary object was created that knows the value of the string and contains useful methods
//the special method is run and returns the new string
//the object is destroyed 
//sometimes the runtime engine even skips the object creation, because it is highly optimized to do such practice
//that works the same for numbers

let num = 1.23456;
alert( num.toFixed(2) );//1.23
*/
//constructors such as Number or String can be used as well, but they are highly recommended because they can lead to undefined behaviour
//best practice is to not used the keyword new with the classes Number/String.etc.
//Remark: null and undefined have no methods (and that's not what we're asking from them)

let str = "Hello";
str.test = 5;//can we define a property on a primitive? The answer is no
//is use strict is used, a error will be shown because we should use let or var (even though it won't work)
alert( str.test );
//in case use strict is not included, the result will show undefined, because primitive is not an object, hence no properties that don't belong to the superclass can be used
//and test is probably not a property (we mostly use methods).
//type error is here: cannot create a property on a string.(primitive)