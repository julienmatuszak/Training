/*
many functions allow asynchronous execution.
actions are initiated now but finish later
we saw setTimeout

another example:

function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

loadScript('script.js');//executed after, this is the callback
alert("Hi");//executed first

now let's add a callback function

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // function declared in the loaded script
});

callback in callback
we can as many nested callback as necessary
loadScript('/my/script.js', function(script) {
  loadScript('/my/script2.js', function(script) {
    loadScript('/my/script3.js', function(script) {
      // ...continue after all scripts are loaded
    });
  });
});

handling errors
if one script loading fails the callback should be able to react

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});
this is called error first callback style.

the convention is:
1. 1st arg of the callback is reseved for an error. then callback err is called
2. the 2nd arg are for the successful result. then callback null result1 result2 is called

pyramid of doom
this is the side effect of the nested callback even with conditional statements
 better make a tower of standalone functions

loadScript('1.js', step1);
function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}
function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}
function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
}

there is a disadvantage to that, first there is only one use per function
fortunately, there is a solution called promises
*/