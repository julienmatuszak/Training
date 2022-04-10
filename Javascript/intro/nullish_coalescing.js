//?? operator => if a is defined then a otherwise b
let a = null, b = 6;
result = (a !== null && a !== undefined) ? a : b;//returns a because a is defined, if null or undefined, then b is shown
alert(result);

//interesting to see if someone's is logged in (defined)
let user;
alert(user ?? "Anonymous" );//anonymous because undefined

let user = "John";
alert(user ?? "Anonymous");//John

//can be short-circuited just like 

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous");//supercoder, as it is the first defined
//yes, it works as well with ||, because supercoder is true not defined.
// || will not distinguished between false, 0, "" null or undefined because they are falsy.

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

//precedence of ?? is the same as ||
//it is forbidden to use it with && and || without parentheses (otherwise syntax error)

let x = (1 && 2) ?? 3;// x = 2

//now it is possible to assign a default value

let height = height ?? 100;//if undefined then 100, otherwise height defined.
//remember to always add parentheses, with or without in doubt