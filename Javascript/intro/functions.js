"use strict";
//functions are called with the parentheses if called from the 'main'

//variable inside functions are local to the function
/*
function showMessage(){
    let message = "Hell";
    alert(message);
}

showMessage(); //this works
//alert(message); // this doesn't because message is local not global

//however, functions can access outer(global) variables
let userName = "john";
function showMessage(){
    let message = 'hello, ' + userName; //can be called
    alert(message);
}

showMessage(); //hello, john


//functions can modify outer variables(unlike c++)
let userName = "john";
function showMessage(){
    userName = 'bob';
    let message = 'hello, ' + userName; //can be called
    alert(message);
}
alert(userName);// john
showMessage(); //change of variable
alert(userName);//hello, bob
//remember to minimize global variables

// we can input default parameters like functions

function showMessage(from, text = anotherFunction()){
    //if we input from and text, anotherFunction() won't be executed
}

//once again, we can play with undefined functionality:

function showMessage(text){
    if (text === undefined)
    {
        text = 'empty message';
    }
    alert(text);
    //text = text || 'empty';// if text is undefined or falsy, we set it to empty
}
showMessage();

//or with the null coalescing operator ??
function showCount(count){
    alert(count ?? 'unknown');//if count is undefined, will show unknown
}
showCount(0);//0
showCount(null);//unknown


//remember that return without a value is the equivalent of exit in a function.
//moreover, a function without return, 'returns' undefined.

function doNothing(){}
    alert(doNothing() === undefined); //true

//remember to leave at least a parenthesis, otherwise it will return undefined

//remember the principle "one function, one action"
//remember to give small function names for function often called, for ex. in an exercise where we need to 
//find out the primes, then show them

function showPrimes(n) {
    for (let i = 2; i < n; i++){
        if(!isPrime(i)) continue;
        alert(i);
    }
}

function isPrime(n){
    for (let i = 2; i < n; i++){
        if(n%i == 0) return false;
    }
    return true;
}


function checkAge(age){
    return (age > 18) ? true : confirm('Did parents allow you?');
}
alert(checkAge(17));

function checkAge(age){
    return((age > 18) || confirm("Did parents allow you?"));
}
alert(checkAge(19));

function min(a,b){
    return (a < b) ? a : b;
}

alert(min(2,5));
alert(min(3,-1));
alert(min(1,1));


function pow(x, n){
    let num = x;
    for (let i = 1; i < n; ++i){
        num *= x;
    }
    return num;
}

let x = prompt("x?", '');

if(n < 1){
    alert(`Power ${n} is not supported, use a positive integer`);
}
else {
    alert(pow(x, n));
}

//other syntax = create a variable (don't forget the outer semicolon) and put a function in it
let sayHi = function(){
    alert("Hello");
};
//there is no need for semicolons at the end of if else statements but here it is a definition

alert(sayHi);//does not show alert but the function code, careful not to show the parentheses
//it basically does not run the function (a function is a value)

//functions can be copied
let func = sayHi;
func();//it works


//CALLBACK FUNCTIONS
//one of the most interesting feature of Javascript

function ask(question, yes, no){
    if(confirm(question)) yes()//remember to add the parenthese because in any case we have to execute a function
    else no();
}

function showOk(){
    alert("You agreed.");
}

function showCancel(){
    alert("You canceled the execution.");
}

ask("Do you agree", showOk, showCancel);

//The best way though is to not write these functions, which is possible with JAvascript
function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("YOu agree.");},
    function() {alert("You canceled the execution");}
)


//totally works, here the functions are called ANONYMOUS, they are not declared.
//they cannot be accessed outside of ask btw.

//why function expression AND function declaration
//there are differences between the 2
// a function declaraton: 1. is declared as separate statement
//2.CAN BE CALLED EARLIER THAN IT IS DEFINED 

//a function expression: 1. is declared as a variable and then assigned to it, needs a semicolon.
//2. CANNOT BE CALLED

sayHi("John");
function sayHi(name){
    alert(`Hello, ${name}`);
}
//works because it is declared, so it is memorized before execution (a bit like var)

let sayHi = function(name){
    alert(`Hello, ${name}`);
};
//won't work, here the function is created only when runtime machine reads it

//another feature is that in strict mode, a function declaration is valid only within its scope.
let age = prompt("What is your age?", 18);
if (age < 18){
    //welcome(); //this would run in strict mode because it's a function declaration and within the block scope
    function welcome(){
        alert("Hello");
    }
} else{
    function welcome(){
        alert("Greetings");
    }
}

welcome();//won't work in strict mode because called out of the scope, which is the block scope (reference error)
//works in non -strict mode


//function statement would work on the contrary
let age = prompt("what is your age?", 18);
let welcome;//needs to be declared before
if(age < 18){
    welcome = function(){
        alert("Hello");
    };
} else{
    welcome = function(){
        alert("Greetings");
    };
}
welcome();

//even better
let age = prompt("What is your age?", 17);
let welcome = (age < 18) ?
    function(){alert("Helle")} :
    function(){alert("Greetings");};

welcome();


//in case of ambiguity, best is to declare a function with function declaration, because it can reach the 
//functions within scope and it's more readable.
//function expression should be used if a conditional declaration is needed for instance.

//ARROW FUNCTIONS, they are a shortcut of function expressions
let sum = (a,b) => a+b;
alert(sum(2,3));//5

//without parameters let sayHi = () => alert("Hello");
//with conditional statements
let age = prompt("What is your age?", 19);
let welcome = (age < 19) ?
    () => alert("Hello"),
    () => alert("Greetings");

welcome();

//if several lines
let sum = (a,b) => {
    let result = a+b;
    return result;
};
alert(sum(1,2));//3

//changing declaration
let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );//expression
  */
 //variant

function ask(question, yes, no){
    confirm(question) ? yes() : no();
}
//changing expression
ask(
    "Do you agree?",
    () => alert("You agreed"),
    () => alert("You canceled the execution")
);//expression, don't forget