/*
//The OR operator evaluates operands from left to right, then for each, if the result is true, stops and return
//the original value of the operand. When all operands have been evaluated, it returns the last one.

alert(1 || 0); // 1, because it is truthy
alert(null || 1); //1, for the same reason
alert(null || 0 || 1); //1, the only truthy value
alert(undefined || null || 0); //0, as they are all falsy and 0 is the last one
alert(undefined || 0 || null);//null, for the same reason

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder as first truthy value

//short-circuit
true || alert("not printed");// returns true, as alert is short-circuited
false || alert("printed"); // shows the message, the 1st (and only) truthy value

//AND operator
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30)
{
    alert('the time is 12.30');
}

//AND finds the first falsy value, otherwise last value
alert (1 & 0);//0
alert(1 && 5);// 5, no falsy, last value
alert(null && 5);//null is the 1st falsy
alert(0 && 'no matter what'); // 0
alert(1 && 2 && null && 3);// null and 3 is ignored

//as in C++, && has a higher precedence than ||
let x = 1;
(x > 0) && alert("Greater than zero!");
//is equivalent to
if(x > 0) alert("Greater than zero!");

// ! NOT operator
alert(!true);//false
alert(!!true);//true
alert(!0);//true
alert(!!null);//false
alert(Boolean(null));//false

alert(alert(1) || 2 || alert(3));//first, 1 is shown, then alert returns undefined, so the first value is passed, 2 is the 2nd value
//in the end, it will show 2, and alert(3) is not read

alert(alert(1) && alert(2));//first, 1 is shown, then alert returns undefined, which is false, the conditional
//statement stops then, and undefined is alerted.

alert( null || 2 && 3 || 4);//the answer is 3, precedence of && over the other operators renders
//alert(null || 3 || 4) because && returns the last if no false, then 3 is the first true.

let age = prompt("What is your age?");
if (age  >= 14 && age <= 90)
{
    alert("You got the right age!");
}

let age = prompt("What is your age?");13
if(!(age >= 14 && age <=90))
{
    alert("You got the right age!");
}//variant: if(age < 14 || age > 90)

if(-1 || 0) alert('first');//executes
if(-1 && 0) alert('second'); //does not execute as 0 is falsy
if(null || -1 && 1) alert('third');//first && executes and return true, then || executes
*/

let login = prompt("Who's there?");
if(login == "Admin")
{
    let input = prompt("What is your password?");
    if(input == "TheMaster")
    {
        alert("Welcome!");
    }
    else if(input == '' || input == null)//escape is represented by null
    {
        alert("Canceled");
    }
    else{
        alert("Wrong password")
    }
}
else if(login == "" || login == null)
{
    alert("Canceled");
}
else
{
    alert ("I don't know you");
}
