let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);
alert(value);//string "true"

alert("6"/"2");//strings converted to numbers

let str = "123";//variable definition
alert(typeof str);//string

let num = Number(str);//type conversion

alert(typeof num);//number

let age = Number("an arbitrary string instead of a number");//whitespaces from the start and end are removed 
//empty string returns 0, if more than a number in the string, returns a number.
alert(age);//NaN
//a value undefined becomes a NaN, null becomes 0, true and false become 1 and 0

alert(Number("  123     "));//123
alert(Number("123q"));//NaN
alert(Number(true));//1
alert(Number(false));//0

//booleans convert to true or false
alert(Boolean("0"));//true
alert(Boolean('1'));;//false