//strings are in single or double quotes or backticks
/*
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`);//3

//string multiple lines
let guestList = `Guests:
  * John
  * Pete
  * Mary
`;//does not work with single or double quotes

alert (guestList);

//SPECIAL CHARACTERS
//\n is a newline
let str = `Hello\nWorld`;//works with double / single quotes
alert(str);

//plenty of Unicode characters
alert("\u00A9");//can be with {}

//special characters are escaped with backticks
alert( `I'm the Walrus!` );

//except the backslash, that needs another backslash to be escaped
alert( `The backslash: \\` );

//special character with a backslash count as 1;
alert( `My\n`.length );// 3 = 2 + 1

//.charAt(index) is the method to access a character in a string
let str = `Hello`;
alert( str[0] );//H
alert( str.charAt(0) );//H
alert( str[str.length - 1] ); //o
//careful, this is case sensitive
//the str[] and the .charAt(index) methods can be used to concatenate
//the methods toUpperCase() and toLowerCase() can be used on strings
// and can be applied only to characters with the methods str[] and charAt(index)

//.indexOf is the method that returns the index of the first character of a substring
//returns -1 if nothing is found according to the substring
//if there are several candidates, the smallest index is returned
//there is another argument to start searching from a given position, which helps finding the next substrings

//the fact that a substring not found  returns -1 can be used in a loop to find several occurrences of a substring

let str = "As sly as a fox, as strong as an ox";
let target = "as";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert ( pos );//will return 3 indexes then the loop will stop
}
//a little inconvenience is when the index is found to be 0, then it will be considered as false in a conditional statement
let str = "Widget with id";

if ( str.indexOf("Widget") ) {//can be replaced by if(str.indexOf("Widget") != -1)
  alert("We found it");//does not work because the index is 0
}

//Bitwise NOT trick
alert( ~2 );// -3  = - (2 + 1)
alert( ~1 );// -2  = - (1 + 1)
alert( ~0 );// -1  = - (0 + 1)
alert( ~-1 );// 0  = - (-1 + 1)

//means it can be used to find the substring at index 0
let str = "Widget";

if(~str.indexOf("Widget")) {
  alert( "Found it!" );
}

//includes startsWith endsWith
//includes returns true if the substring is present in the string. a 2nd integer argument can tell where to search
//startsWith and endsWith are pretty self-explanatory and there is obviously no 2nd osition argument with them

//slice 
let str = "stringify";
alert( str.slice(0, 5) );//string, starts at index 0 until index 5 (excluded)
alert( str.slice(0, 1) );//"s", only index 0

//let str1 = "stringify";
alert( str.slice(2) );//ringify, starts at index 2 included until the end
alert( str.slice(-4, -1) );//starts at -4 (fourth character from the end) until the last one excluded

//Note: slice does not modify stringify

//substring is slice that allows start and end to be swapped
str = "stringify";
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ) //""

//substr method has the 2nd argument being the number of characters to slice
let str = "stringify";
alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
alert( str.substr(-4, 2) );
//both substring and substr do not modify the strings

//string can be compared just like numbers
//lowercase are always greater (further ASCII code)
//obviously the same for diacritcics (far in the ASCII code)
//a character can be returned depending on its ASCII code with the method .fromCodePoint from object String
alert( String.fromCodePoint(90) ); //Z
//they can be reached with declared hex number (\u)

//correct comparisons
//the method localeCompare returns a positive integer if str is further than str2, positive if not
alert( 'Österreich'.localeCompare('Zealand') );//-1 because here Ö is considered as O because LOCALE
//if strings are equal, this method will return 0

//rare characters or math symbols are encoded with a pair of 2-byte characters called a surrogate pair

alert( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
alert( '😂'.length ); // 2, FACE WITH TEARS OF JOY
alert( '𩷶'.length ); // 2, a rare Chinese hieroglyph

alert( '𝒳'[0] ); // strange symbols...
alert( '𝒳'[1] ); // ...pieces of the surrogate pair

// charCodeAt is not surrogate-pair aware, so it gives codes for parts
alert( '𝒳'.charCodeAt(0).toString(16) ); // d835, between 0xd800 and 0xdbff, the first 2 bytes
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, between 0xdc00 and 0xdfff, the second 2 bytes

//diacritic marks are added after the character is declared
alert( 'S\u0307' ); // Ṡ
alert( 'S\u0307\u0323' ); // Ṩ
let s1 = 'S\u0307\u0323'; // Ṩ, S + dot above + dot below
let s2 = 'S\u0323\u0307'; // Ṩ, S + dot below + dot above
alert( `s1: ${s1}, s2: ${s2}` );
alert( s1 == s2 ); //different because the order of declaration of the diacritics is different
//it's possible to normalize the characters with the function normalize

alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
alert( "S\u0307\u0323".normalize().length ); // 1
alert( "S\u0307\u0323".normalize() == "\u1e68" ); // true
//there are plenty of methods available : trim(), repeat(), etc.

function ucFirst(name) {
  if (!name) return name;
  return name[0].toUpperCase() + name.slice(1);
}
alert(ucFirst("john"));

function checkSpam(str) {
  return str.toLowerCase().includes("viagra") || str.toLowerCase().includes('xxx'); 
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {

  if (str.length > maxlength) {
    return (str.substring(0, 19) + '\u2026');
  }
  else {
    return str;
  }
}

//better one
function truncate(str, maxlength) {

    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '\u2026' : str;
}
alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20));

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 );
*/