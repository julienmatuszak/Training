//we can play with the many functionalities of javascript, like below with + and the fact that the values compared in switch statement have to be strictly equal
/*let a = "1";
let b = 0;
switch(+a)
{
    case b+1://if no conversion to 1, won't work
        alert("this runs, because +a is 1, exactly equals b+1");
        break;
    
    default:
        alert("this doesn't run");
}

//another interesting powerful functionality, when there is no break argument, we can use several cases:
let a = 3;

switch(a)
{
    case 4:
        alert("right!");
        break;
    
    case 3:
    case 5:
        alert("Wrong");
        alert("Why don't you take a math class?");
        break;

    default:
        alert("the result is strange. Really.");
}

//type matters, if we input a number, we will never get a number because switch uses strict equality:
let arg = prompt("Enter a value?");
switch(arg)
{
    case '0':
    case '1':
        alert("one or zero");//because no break for case 0
        break;
    case '2':
        alert('Two');
        break;

    case 3://will never work because we will never input a number
        alert("Never executes!");
        break;
    
    default:
        alert('an unknown value');//that's what is shown with input 3
}


if(browser === "Edge")
{
    alert("You've got the Edge!");
}
else if(browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera")
{
    alert("Okay we sypport these browsers too");
}
else{
    alert("We hope that this page looks ok");
}
//for given strings, == works as well so we could have used it here

let a = +prompt("a?", '');
switch (a)
{
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}
*/