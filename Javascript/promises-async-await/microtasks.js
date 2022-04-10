/*
promise handlers are always asynchronous
their code will still execute before the handlers do.

let promise = Promise.resolve();
promise.then(() => alert("promise done!"));
alert("code finished"); // this alert shows first

asynchronous tasks need proper management. 
the queue is first in first out, like a queue in c++
execution of a task is initiated only when nothing else is running

when a promise is ready then catch finally handlers are put into the queue so they are not executed yet
when js engine becomes free from the code it takes a task from the queue and executes it

if there's a chain every one is executed async: it first gets queu3ed then executed when the
code is comp;lete and previously queued handlers
so we can use this queue aspect to show code finished at the end

Promise.resolve()
  .then(() => alert("promise done!"))
  .then(() => alert("code finished"));

  unhandled rejection
  now we can understand how unhandledrejection from the js engine works
  let promise = Promise.reject(new Error("Promise Failed!"));
promise.catch(err => alert('caught'));
// doesn't run: error handled
window.addEventListener('unhandledrejection', event => alert(event.reason));

without catch the unhandled will execute
let promise = Promise.reject(new Error("Promise Failed!"));
// Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));

and if we want to handle the error later:
let promise = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch(err => alert('caught')), 1000);
// Error: Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));

now promise failed first and then caught which is good.
unhandledr is executed when the microtask queue here is complete the engine looks at the
proimises and if any of them is rejected then the event triggers
catch here triggers later.
*/