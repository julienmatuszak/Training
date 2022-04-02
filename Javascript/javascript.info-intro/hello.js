function hello(name) {
    let phrase = `Hello, ${name}!`;//remember that it returns undefined so the console will return it

    say(phrase);
}

function say(phrase) {
    alert(`** ${phrase} **`);
}
//remember that debugger breakpoints can be set automatically by including the debugger keyword in the code

//STYLE GUIDELINES
function pow(x, n) {
    let result = 1;
    //remember to leave a vertical indent
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if(n <= 0) {
    alert(`Power ${n} is not suppoerted,
    please enter an integer number greater than zero`);
} else {
    alert( pow(x, n) );
}