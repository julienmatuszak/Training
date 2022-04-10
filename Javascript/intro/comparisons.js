alert( 2 > 1 );//true
alert( 2 == 1);//false
alert( 2 |= 1 );//true

let result = 5 > 4;//assigne the result of the comparison (true)
alert( result );

alert( 'Z' > 'A' );//true
alert( 'Glow' > 'Glue');//true
alert( 'Bee' > 'Be' );//true

alert( true == 1);//true
alert( false == 0);//true

let a = 0;
alert( Boolean(a) );//false

let b = "0";
alert( Boolean(b) );//true

alert(a == b);//true, because there is a conversion from string to number

alert( 0 == false );//true, because conversion from false to number

alert( '' == false );//true, because conversion from string to number, hence becomes a 0

//BUT
alert(0 === false);//false, because types are different

//
alert( null == undefined ); //true
alert( null === undefined ); //different types
//
alert( null > 0 ); // false
alert( null == 0 ); // false, converts to 0, but == comparison checks if null IS NOT ONLY EQUAL TO 0 (AFTER CONVERSION)
//BUT ONLY EQUALS TO THAT, WHICH IS NOT TRUE
alert( null >= 0); //true, BECAUSE IN THAT CASE, WE DON'T INCLUDE THE UNIQUE EQUALITY, STRICT EQUALITY
//AND THIS IS TRUE THAT NULL IS CONVERTED TO 0, BUT IS NOT ONLY EQUALS TO 0

//DIFFERENT STORY FOR UNDEFINED
alert( undefined > 0 ); //false
alert( undefined < 0 ); //false
alert( undefined == 0 ); //false,
//UNDEFINED GETS CONVERTED TO NAN, AND NAN IS A NUMERIC VALUE THAT RETURNS FALSE FOR ALL COMPARISONS

//Best practice is that if null and undefined appear at some point during execution, they should be treated
//separately instead of being included in comparison statements.

5 > 4;//true
"apple" > "pineapple";//false
"2" > "12";//true because strings are compared
undefined == null;//true
undefined === null;//false
null == "\n0\n";//false
null === +"\n0\n";//false