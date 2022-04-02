/*
the best waty to handle errors is to add .catch to the promise

implicit try catch
is inside the code of a promise executor and promise handlers

the 2 below are equivalent
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!
…Works exactly the same as this:

new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!

rethrowing is also valid

// the execution: catch -> catch
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(function(error) { // (*)
  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");
    throw error; // throwing this or another error jumps to the next catch
  }
}).then(function() {
   doesn't run here 
}).catch(error => { // (**)
  alert(`The unknown error has occurred: ${error}`);
  // don't return anything => execution goes the normal way
});
the execution jumps from the 1st catch to the next one

UNHANDLED REJECTIONS
if an error is not handled the console logs a message
js engine tracks these rejections and generates a global error
it canbe caught in the browser:

window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});
new Promise(function() {
  throw new Error("Whoops!");
}); // no catch to handle the error


*/