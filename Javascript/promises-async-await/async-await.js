/*
async can be poaced before a function
async function f() {
  return 1;
}

here it means that the function will return a promise. other values are wrapped in a 
resolved promise automatically.

async function f() {
  return 1;
}
f().then(alert); // 1

works the same as

async function f() {
  return Promise.resolve(1);
}
f().then(alert); // 1

await only works inside async functions
The keyword await makes JavaScript wait until that promise settles and returns its result.
Here’s an example with a promise that resolves in 1 second:

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "done!"
}
f();
we see that await wait for the promise to be solved, it pauses at * until result comes.
once again it suspends the function exec until the promise settles and then resumes the function
with the promise result
no CPU is consumed bacause js engine can do other jobs. Very handy! and sumpler than promise,then

CAREFUL though await does not work in non asyn functions
that triggers a syntax error

async function showAvatar() {
  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();
  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);
  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  img.remove();
  return githubUser;
}
showAvatar();

await does not work in top level code
only in async functions
jpowever we can wrap anonymous async functions

the syntax error beloew
// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

can become 
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();

await will soon be available at top level

await accepts thenables
thenables objects as a reminder have the then method. await allows their use.
if .then then await

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}
async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}
f();

async class methods
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}
new Waiter()
  .wait()
  .then(alert); // 1 (this is the same as (result => alert(result)))

  inside the class before the function

error handling
  async function f() {
  await Promise.reject(new Error("Whoops!"));
}
works the same as
async function f() {
  throw new Error("Whoops!");
}
and allws then error handling

we can tr catch an derror the same way as throw regular
async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}
f();

We skip to the catch block in case of error
async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}
f();

if we don't have try catch then the promise generated by the call of the async function f
becoms rejectec. We can append catch to handle it
async function f() {
  let response = await fetch('http://no-such-url');
}
// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)

we now have a way to avoid promise.then./catch we use async await instead
we usually ise promise then catch when not inside async functions
*/