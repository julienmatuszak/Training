/*let age = prompt('age?', 18);

let message = ( age < 3 ) ? 'Hi baby!' :
    ( age < 18 ) ? 'Hello' :
    ( age < 100 ) ? 'Greetings!' :
    'What an unusual age!';

alert( message );

//VERY IMPORTANT, IF STATEMENT WILL NOT EXECUTE ONLY WITH AN EMPTY STRING OR 0 OR FALSE BUT WITH "0", IT WILL EXECUTE
if(0)
{
    alert("It won't work")
}
if("0")
{
    alert("But now it will")
}
ECMA
let answer = prompt(`What's the "official" name of Javascript?`);
if(answer != "ECMAScript")
    alert(`You don't know? "ECMAScript"!`)
else
    alert("Right!")

let answer = prompt("Enter a number: ");
if(answer > 0)
{
    alert(1);
}
else if(answer < 0)
{
    alert(-1);
}
else
{
    alert(0);
}

let a = 2;
let b = 2;

let result = ( a + b < 4 ) ? "Below" : "Over";
alert(result);
*/

let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
