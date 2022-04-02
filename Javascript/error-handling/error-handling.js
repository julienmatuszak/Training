/*
try catch to catch the error just like in python and c++

1. try the code code is exe
if no errors catch err is ignored
other wise catch executes

try {
  alert('Start of try runs');  // (1) <--
  // ...no errors here
  alert('End of try runs');   // (2) <--
} catch (err) {
  alert('Catch is ignored, because there are no errors'); // (3)
}

try {
  alert('Start of try runs');  // (1) <--
  lalala; // error, variable is not defined!
  alert('End of try (never reached)');  // (2)
} catch (err) {
  alert(`Error has occurred!`); // (3) <--
}

try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}

try catch works synchronously

WRONG
try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}

RIGHT we put the try inside
setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);

error err is an object, it has 2 properties name message and stack
stack is the current call stack a string iwht info about the sequence of nested calls

try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined
}

optional catch binding

let json = "{ bad json }";

try {
  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work
} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}

we use the catch block ut we can do more

throwing oqwn eerrors we use the throw operator

let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!
} catch (err) {
  alert( "doesn't execute" );
}

let json = '{ "age": 30 }'; // incomplete data
try {
let user = JSON.parse(json); // <-- no errors
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  alert( user.name );
} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}

rethrowing
Catch gets all errors.
In the catch (err) {...} block we analyze the error object err.
If we don’t know how to handle it, we do throw err.

let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
  blabla(); // unexpected error
  alert( user.name );
} catch (err) {
  if (err instanceof SyntaxError) {
    alert( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }
}

HERE WE HAVE SEVERAL LAYERS OF ERR CATCH
function readData() {
  let json = '{ "age": 30 }';
  try {
    // ...
    blabla(); // error!
  } catch (err) {
    // ...
    if (!(err instanceof SyntaxError)) {
      throw err; // rethrow (don't know how to deal with it)
    }
  }
}
try {
  readData();
} catch (err) {
  alert( "External catch got: " + err ); // caught it!
}

try catch finally
If you answer “Yes” to “Make an error?”, then try -> catch -> finally.
If you say “No”, then try -> finally.

let num = +prompt("Enter a positive integer number?", 35)
let diff, result;
function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
let start = Date.now();
try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}
alert(result || "error occurred");
alert( `execution took ${diff}ms` );

we can also only use try finally as a switch when we just don't wanna handle errors

GLOBAL CATCH
node.js hjas process on uncaughtexceptio
<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };
  function readData() {
    badFunc(); // Whoops, something went wrong!
  }
  readData();
</script>
*/