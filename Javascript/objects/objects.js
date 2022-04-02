//let user = new Object();//object constructor syntax
//let user = {}; //object literal syntax
/*
let user = {//'user' is the object
    name: "John",//by key 'name' stores the value 'john'
    age: 30,//and key 'age' stores value 30
    "likes birds": true,//multiword are accepted, withing quotes
    //last property can end with comma or nothing
};

//to use properties
alert(user.name);

//any type can be used
//user.isAdmin = true;

//to remove a property
delete user.age;

//properties can be set from outside the constructor
//if multiword, [] are needed: 
//user["likes birds"] = true;
//alert(user["likes birds"]); //returns true
//delete user["likes birds"];

//or a variable could be defined
//let key = "likes birds";
//user[key] = true;//same as above
//and used as results of other functions like prompt:

let key = prompt("what do you want to know about the user?", "name");
alert( user[key] );//if 'name' is entered, returns 'john'
//however user.key cannot be used, it has to be [], not .
Insted, we can use computed properties, we define a variable, and then inject it in the object with square brackets

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5,
};

alert( bag.apple );//5 is fruit="apple", if "apple" is entered, bag becomes {apple: 5}
//this last property can be entered outside the object as well
//let bag = {};
//bag[fruit] = 5;
//and properties names can be concatenated:
//let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5//now the property is bag.appleComputers and equals 5
}

//properties are often written the short-handed way
/*function makeUser(name, age) {
    return {
        name,//instead of name: name
        age : 30,
    }
}
//remember that property names CAN be reserved words

//property keys are automatically converted to strings, in the constructor or when referred to
let obj = {
    0: "test"//automatic conversion to string
};
alert( obj["0"] );
alert( obj[0] );//automatic conversion to string

//__proto__ can't be a non-object value

//There are no errors if no property is defined, just the usual undefined.
//There is a special operator 'in' to know if the property exists in an object

let user = { name: "John", age: 30};

alert( "age" in user ); //will return true
alert( "blablabla" in user ); // will return false

//we could use undefined, except when a property exists and has the value undefined ! In this case, we use in
let obj = {
    test: undefined
};
alert( obj.test );//undefined, but the property exists
alert( "test" in obj );//true
//moreover, in is used in loops, to iterate an object

//FOR IN LOOPS

for (let key in user) {
    alert( key );
    alert( user[key] );
}

//objects are ordered, in the order of the keys IF THOSE ARE INTEGER PROPERTIES
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "+49": "Allemagne",
    "+1.2": "unknown country",
    "44": "Great Britain",

    "1": "USA"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }

  //but if a property is "+49" or "1.2", it will be shown in the order it has been entered, after all the other integer
  //BECAUSE THIS IS NOT INTEGER PROPERTY
  //so here first +49 then +1.2, hence to keep the order, we can add + everywhere so that it does not have the integer property anymore

let user = {};//empty object
user.name = "John";//one way to add the property
user.surname = "Smith";

for (let x in user) {
    alert( user[x] );
}

user.name = "Pete";
delete user.surname;

for (let x in user) {
    alert( user[x] );
}

let schedule = {};

alert ( isEmpty(schedule) ); // true
schedule["8.30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty() {
    for (let key in schedule) {
        return false;
    }
    return true;
    //return ((schedule === null) ? true : false);
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

alert(sumAll(salaries));

function sumAll(salaries) {
    let sum = 0;
    for( let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
console.log(multiplyNumeric(menu));
/*
function multiplyNumeric(menu) {

    for (key in menu) {
        menu[key] *= 2;
    }

    return menu;
}
*/

function multiplyNumeric(menu) {

    for (key in menu) {
        if (typeof menu[key] == 'number') {//if this is not typed, the last property will result in NaN because we try to multiply a string by an integer
            menu[key] *= 2;
        }
    }

    return menu;
}
