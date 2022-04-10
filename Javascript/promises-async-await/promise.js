/*
a promise is:
1. a producting code that does something and takes time
2. a consuming code that wants the result of the producing code and the consuming code.
3. a promise links the producing code and the consuming code.

let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

the functoin passed is called executor, it runs automatically when the instance is crteated.
it contains the producing code.

resolve and rehect are callbacks provided by js.
resolve(value) if the job is finished successfully with restul value
reject(error) if an error has occurred, error is the error object.

the executor runs auto and tries to perform a job. when it finished it calls resolve or reject

the promis object is returned by tghe new promse constructor
with the properties state and result it can be fulfilled with value or rejected with error

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed
  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

let promise = new Promise(function(resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

let promise = new Promise(function(resolve, reject) {
  resolve("done");
  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
only one result and only one argument.
reject can have error objects.

state and result are internal we can't directly access them but we can use the method
.themn .catch and .finally

promise.then(
  function(result) {  handle a successful result  },
  function(error) {  handle an error  }
);

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});
// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);

let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});
promise.then(alert); // shows "done!" after 1 second

catch only if we are interested in the errors

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second
finally same as then except it can execute some cleanup for instance
new Promise((resolve, reject) => {
   do something that takes time, and then call resolve/reject 
})
// runs when the promise is settled, doesn't matter successfully or not
.finally(() => stop loading indicator)
// so the loading indicator is always stopped before we process the result/error
.then(result => show result, err => show error)

finally is before then
finally handler has no arguments
finally passes through results and errors to the next handler

new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Promise ready"))
  .then(result => alert(result)); // <-- .then handles the result

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready"))
  .catch(err => alert(err));  // <-- .catch handles the error object

Handlers can be attached to settled promises
now we can rewrite loadscript

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);
promise.then(script => alert('Another handler...'));

we see that promises allows to handle callback functions way better than nested callback
*/