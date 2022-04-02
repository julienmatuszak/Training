//numbers are 64-bit if regular
//bigint can exceed 2**53 or -2**53, they have few(but interesting) applications
//numbers can be written with underscores
/*let billion = 1_000_000_00_0;//no underscore at the end

//and with the scientific notation
let billion = 1e9;
alert(billion);

//that works the same with smaller than one numbers
let micro = 1e-6;
alert( micro );

//binary, octal and hex numbers are declared resp.with the characters 0b, 0o and 0x
//for hex numbers, letter symbols can be declared upper or lower
//they are converted into the same values if they are equal, hence:
let a = 0b11111111;
let b = 0xff;
alert(a == b);//true, as well as ===

//the toString(base), will return the equivalent number expressed in the right base
let num = 255
alert( num.toString(16) );//ff
//base 16 is used for colors
//base 2 for binary
//base 36 for url etc.
//IMPORTANT TO USE A METHOD ON A LITERAL NUMBER WE NEED TO TYPE TWO DOTS!!
//alert( 123456.toString(36)); //error
alert( 123456..toString(36)); 

//to round a number, we can use the method toFixed(number of decimals) or use Math.round
let num = 1.23456;
alert ( num.toFixed(3) );//1.235
alert( Math.round(num * 100) / 100);//1.23

//if a number is too big (as a regular number), the value shown will be infinity or -infinity

//problem as always, is for fractions, as they are stored in binary forms. 0.1 is unending so to compare 
//math operations on fractions is always a bit tricky
alert(0.1 + 0.2);//0.300000000004 because of the 11 bits for the precision
//hence
alert( 0.1 + 0.2 == 0.3);//false
//the workaround is the same, diminish the precision (paradoxically increasing it)

let sum = 0.1 + 0.2;
alert( sum.toFixed(2));//0.30 (convenient for shopping sites)
//this above is a string, to convert to a number (precision loss), use the unary operator
//another workaround is to turn fractions into integers, but problems persist to a certain extent

alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

//an interesting fact is that it does exist as well for big numbers because they are stored with exponents
alert( 9999999999999999 );

//another interesting fact is that
alert( 0 == -0);//true, well this is autocorrected i guess

alert( isNaN(NaN) );//true
alert( isNaN("true") );//true
//unfortunately NaN can't be used for comparison
alert( NaN == NaN );//false, because NaN does not equal anything, including itself

alert( isFinite("15") ); // true
alert( isFinite(NaN) );//false
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity
//Sometimes isFinite is used to validate whether a string value is a regular number:

let num = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(num) );//btw, 0 is finite

//BTW, there is a special function called Object.is to compare values, within its use:
alert( Object.is(NaN, NaN) );//true
alert( Object.is(0, -0) );//false
//that can prove useful

//often values are given with unities etc. the engine will not automatically convert to numbers in that case:
alert( +"100px" );//not an error, but NaN either
//comes in parseInt and parseFloat, pretty self-explanatory; parseInt will parse the integers and parseFloat the floating numbers (with a decimal point)
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') );//12.3
alert( parseFloat('.123') );//Nan
//numbers have to start with an integer or a float though
alert( parseInt('a123') );//NaN

//another cool feature is the 2nd argument of parseint, that allows to convert to the base
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456

//other cool features
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // ... (any random numbers)
//Math.max(a, b, c...) / Math.min(a, b, c...)
//Returns the greatest/smallest from the arbitrary number of arguments.

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
//Math.pow(n, power)
//Returns n raised to the given power.

alert( Math.pow(2, 10) ); // 2 in power 10 = 1024

let a = prompt("a?", 0);
let b = prompt("a?", 0);

alert( +a + +b );
//OR
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3
alert( Math.round(1.35 * 10) / 10 ); // 1.4
alert( Math.round(6.35 * 10) / 10 ); // 6.4

alert( 6.35.toFixed(20) ); // 6.34999999999999964473
alert( 1.35.toFixed(20) ); // 1.35000000000000008882
alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
alert( Math.round(6.35 * 10) / 10);

function readNumber() {
    let a = prompt("Enter a valid number: ");
    if(a == "" || a == null)
    {
        return null;
    }
    else if(+a != a)
    {
        return "This is not a valid number";
    }
    else {
        return +a;
    }
}
alert(readNumber());

//OR
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);
  //this is better and enhanced because here we prompt a choice of number and there is a loop

//Instead of 
let i = 0;
while (i != 10) {
  i += 0.2;
}
//where i would never equal 10 (infinite loop)

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}//we see that i would never equal but we can break the loop with those two conditions


function random(min, max) {
    let num = 0;
    while (num < min || num > max)
    {
        num = (max - min) * Math.random();
    }
    return num;
}

//OR

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//better because no need for while loop

function randomInteger(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }
  //this function does not return with the same probability

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

//CORRECT SOLUTION
function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
//this one yes
*/