//objects cannot be duplicated when copied, only referenced, that is because the identifier of the object
//returns the address in memory, so an assignment is the equivalent of a copy of the address
//hence a 'new' object will actually lead to the same object. that is called a reference
//a bit like a place with two keys when a new reference is created
/*
let user = { name: 'John' };

let admin = user; //redirects to the same object

admin.name = 'Pete'; //changed in 'both' objects

alert(user.name); //'Pete'

//That means that the references are strictly equal
let a = {};
let b = a;

alert( a == b ); // true
alert( a === b ); // true

//but 
alert ( {} == {} ); //false

// we usually don't need that, because we use classes to instantiate different objects
// technically it is possible to clone an object: create a new empty object, then loop all the values in.
//another possible method is Object.assign (dest, [src1, src2, etc.])
//Object is the superclass, assign a method that copies the source objects into dest. This method returns dest
//if the property exists, it will be overwritten
let user = {
    name: 'John';
};
let clone = Object.assign({}, user);

//IMPORTANT: properties can be assigned objects!
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
alert( user.sizes.height ); //182
*/
//Problem is that, in case of a clone, the properties will not be cloned but referenced!!
//The workaround is to loop the properties to see if one is an object, and then clone it as well.
//THIS IS CALLED DEEP CLONING, THIS CAN BE DONE WITH RECURSION

//OBJECTS CAN BE MODIFIED
//don't be fooled by the const keyword to initialize an object
//the const keyword just make so THAT YOU CANNOT REASSIGN THE TYPE, BUT YOU CAN STILL MODIFY THE OBJECT
const user = {
    name: "John"
};

user.name = "Pete"; //this does work as user is still an object, we can change their properties
alert(user.name);//'Pete'