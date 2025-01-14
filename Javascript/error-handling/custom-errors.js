/*
we will customize a validation error for json
json parse only throws syntax errors so let's customize it

this is the built in class method
// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (different names for different built-in error classes)
    this.stack = <call stack>; // non-standard, but most environments support it
  }
}

now we create the extended class validatinerror
class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}
function test() {
  throw new ValidationError("Whoops!");
}
try {
  test();
} catch(err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // a list of nested calls with line numbers for each
}

we call the parent constructor with super here itwill set the msg property

the parent constr sets the name to error so in the line following we reset to the right value

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

// Working example with try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) { // (*)
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}


this is great because then we will extend this class to others like propertyrequirederror
\and instanceof check wil work for further inheritance

we only need to pass the property name the message is generated by the constr
we have to assign manually again though
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

    alert("Invalid data: " + err.message); // Invalid data: No property: name
    alert(err.name); // PropertyRequiredError
    alert(err.property); // name


This can be avoided by assigning this.name = this.constructor.name

if we call myerror we have

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class ValidationError extends MyError { }
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.property = property;
  }
}
// name is correct
alert( new PropertyRequiredError("field").name ); // PropertyRequiredError

now we got rid of the this.name

the readuser should handle more errors 
we should not check one by one 
comes in wrapping exceptions
We’ll make a new class ReadError to represent a generic “data reading” error.
The function readUser will catch data reading errors that occur inside it, such as ValidationError and SyntaxError, and generate a ReadError instead.
The ReadError object will keep the reference to the original error in its cause property.

now the code will only check for readerror not every kind of data reading errors

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error { ... }
class PropertyRequiredError extends ValidationError {  ...  }

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Syntax Error", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Validation Error", err);
    } else {
      throw err;
    }
  }

}

try {
  readUser('{bad json}');
} catch (e) {
  if (e instanceof ReadError) {
    alert(e);
    // Original error: SyntaxError: Unexpected token b in JSON at position 1
    alert("Original error: " + e.cause);
  } else {
    throw e;
  }
}
*/