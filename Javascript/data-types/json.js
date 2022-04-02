/*
JSON and JSON methods
if we have a complex object and we want to convert it to a string, send it over a networkm output it, 
the string should include all important properties
It could be:

let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};
alert(user);//the whole object is converted to a string and send to the function alert

what if we add some properties, or old are renamed or removed?
we would have to update toString() all the time.
We could loop over properties in it, but what if the object is complex and has nested objects in properties?
JSON.stringify
JSON stands for JavaScript Object Notation is a format to represent values and objects
It uses two main methods, JSON.stringify to convert objects into JSON and JSON.parse to convert JSON back into an object. MUCH HANDIER, ISN'T IT?


let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);//calling the JSON object

alert(typeof json);//it's a string

alert(json);

in this method, strings are only double quoted, NO SINGLE QUOTES, NO BACKTICKS
Same for property names, age:30 becomes "age":30
It works for primitives btw, so stringify works with objects, arrays, strings, numbers, booleans and null


alert ( JSON.stringify(1) ); // a nymber 1
alert( JSON.stringify('test' ) ); //"test"
alert( JSON.stringify(true) ); //true
alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

JSON is data-only language-independent specification, it will ignore function properties (methods), symbolic keys and values and properties that store undefined

let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

alert( JSON.stringify(user) ); // {} (empty object)

NESTED objects are supported and automatically converted

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

alert( JSON.stringify(meetup) );
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}

CIRCULAR REFERENCES ARE FORBIDDEN: That means when object properties intertwined
let room = {
  number: 23
};
let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};
meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup
JSON.stringify(meetup); // Error: Converting circular structure to JSON

JSON FULL SYNTAX
let json = JSON.stringify(value[, replacer, space])

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
{"title":"Conference","participants":[{},{}]}
now {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

But the list of properties is very long. Instead, we use an array as a replacer. this replacer function is called for every key value pair and returns the replaced value
otherwise it will show undefined, 

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

 key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]

We can see that it is a recursive function that is applied to every key value pair
The first key looks weird, that is because the first key value is the object itself, so we get :object

The last argument is the nyumnr of space indents

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}

for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
It can also be a string

CUSTOM 'toJSON'

let room = {
  number: 23
};
let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};
alert( JSON.stringify(meetup) );

  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)//the nethod is automatically called if possible (in that case yes, dates have built-in JSON methods
    "room": {"number":23}               // (2)
  }

let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23, the method in room is called again

alert( JSON.stringify(meetup) );
  {
    "title":"Conference",
    "room": 23, and we get the result of the method
  }

  JSON.parse
  NOW WE WANNA DECODE THE STRING WE HAVE RECEIVED FROM A SERVER FOR INSTANCE
  let value = JSON.parse(str, [reviver]); is the syntax

// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log(numbers);
alert( numbers[1] ); // 1

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);
console.log(userData);
alert( user.friends[1] ); // 1

let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;
One last common mistake, no comments are possible. A library JSON5 does but this is a standalone library, so it's rare that applications use it

title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);
alert( meetup.date.getDate() ); // Error! getDate not a function!!!
BECAUSE WE HAVE NOT TOLD JSON THAT getDate() was a method so JSON HAS KEPT THE STRING
COMES IN REVIVER

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {//the function will help revive
  if (key == 'date') return new Date(value);//conditional statement
  return value;
});
alert( meetup.date.getDate() ); // now works!

ALSO WORKS FOR NESTED OBJECTS

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date.getDate() ); // works!


let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user);
alert(json);

let user2 = JSON.parse(json);
alert(user2);
console.log(user2);

OR
let user2 = JSON.parse(JSON.stringify(user));

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);

  if (key == 'occupiedBy') {
    if (value == meetup) {//this was the bloody trick only because the value cannot be written as a string in an object!!!!
      return undefined;
    }
    else {
      return value;
    }
  }
  if (key == 'self')
  {
    return undefined;
  }
  return value;

}) );

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
*/
