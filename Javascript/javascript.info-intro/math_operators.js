/*let x = 1;

x = -x;
alert(x);//-1

let x = 1, y = 3;
alert(y - x);//2

alert(5 % 2);//1
alert(8 % 3);//2

alert(2 ** 2);//4
alert(2 ** 3);//8

alert(4 ** (1/2));//2
alert(8 ** (1/3));//2

let s = "my" + "string";
alert(s);//mystring

alert('1' + 2);//"12"
//if one of the operand is a string, the other operand is converted to a string
alert(2 + '1');//"21"

alert(2 + 2  + '1');//"41", first the operand adds 2 + 2, from left to right

alert('1' + 2 + 2);//"122", from left to right, so first the concatenation and then conversion to a string,
//same second time

alert(6 - '2');//4
//with binary operator -, no conversion to a string, number strings are converted to numbers
alert('6' / '2');//3

let x = 1;
alert( +x );//1

let y = -2;
alert( +y );//-2

//converts non-numbers
alert( +true );//1
alert( +"" );//0
//the unary operator + converts non-numbers to numbers

let apples = "2";
let oranges = "3";
alert( +apples + +oranges);//5, because conversion from strings to numbers
//or alert( Number(apples) + Number(oranges) );//5

//operator precedence
let x = 2 * 2 + 1;
alert( x ); //5
//first multiplication then addition then assignment

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);//this can be done, first parentheses then a = 3, then 3-3, so result is 0

let a, b, c;
a = b = c = 2 + 2;//all variables are equal to 4
/* same as c = 2 + 2;
b = c;
a = c;

let n = 2;
n += 5;//7
n *= 2;//14
n = 2;
n *= 3 + 5;//the + has precedence over *=, unlike * so result is 16

let counter = 2;
counter++;//3
counter--;//2
//doesn't work with literals

let c = 1;
let a = ++c;//
alert(a);//2 directly assigning a and c the number 2
alert(c);//2

let counter = 1;
let a2 = counter++;
alert(a2);//1
alert(counter);//2 counter is incremented but a2 is assigned a copy of counter

let counter2 = 0;
counter2++;//1
++counter2;//2
alert(counter);
//same effect

let counter3 = 0;
alert(++counter);// shows 1 because increment before assignment

let counter4 = 0;
alert(counter++);//0 before assignment

let a = (1 + 2, 3 + 4);//7
//the comma operator returns the last expression evaluated, it's one of the lowest precedence
//why? sometimes we need to declare variables and after the comme will be done the interesting operation

for(a = 1, b = 3, c = a * b; a < 10; a++){
    alert(a)
}
//only the multiplication is interesting here

"" + 1 + 0;//"10"
"" - 1 + 0;//-1 (number)
true + false;//1 (number)
6 / "3";//2 (number)
"2" * "3";//6 (number)
4 + 5 + "px";//"9px"
"$" + 4 + 5;//"$45"
"4" - 2;//2 (number)
"4px" - 2;//NaN (from the start)
"  -9  " + 5;//"   -9   5"
"  -9  " - 5;//-14 (number)
null + 1;//1 (number)
undefined + 1;//NaN, not undefined
" \t \n" - 2;//-2 (number)*/

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(Number(a) + Number(b)); //3
alert(+a + +b);//3