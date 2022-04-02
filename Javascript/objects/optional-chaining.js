//this option is used in case of missing property, which would result in an error, as in the example below:
/*let user = {};

alert(user.address.street); //error, because there is no property of undefined, undefined being user.address
//this is a type error by the way, as it is related to the undefined type

//another example, when we are looking for a property of an element in a document, but the element is nowhere
//to be found, resulting in null

let html = document.querySelector('elem').innerHTML;//typeerror related to null, as null does not have properties
//hence the need to check if the property is there with a if statement for instance

let user = {};
alert( user.address ? user.address.street : undefined);//no more errors as we defined undefined

//this has limits however, first we repeat user.address, then it could be that there are many nested properties
//making the code unreadable ; a more elegant way is to use the AND operator
//but this can make the code heavy once again, as we duplicate the names
//comes in optional chaining, runtime environment will stop if ?. is present to check if the property exists

let user = {};

alert( user?.address?.street);//things are written only once, and we can check every property, here undefined

//if user = null
let user = null;
alert( user?.address );//undefined
alert( user?.address.street );//undefined since address is undefined
//please note though that if we wanna test other options(in case user is defined, we'd have to use the ?. operator further)
//which leads to the recommendation to not overuse this operator. let's check if properties are present one at a time
//second the variable BEFORE the operator ?. must be declared. Otherwise a reference error will appear.

//an interesting fact is that the ?. operator short-circuits just like OR or AND

let user = null;
let x = 0;

user?.sayHi(x++); //x will not increment
alert(x);//0

//actually ?. is not an operator but a syntax construct, that means it also works with [] and ()
let userAdmin = {//object
    admin() {//method
        alert("I am admin");
    }
};

let userGuest = {};//empty object

userAdmin.admin?.();//is there a function admin ? the answer is the execution of the method
//we see that the operator let the .method "pass" because the function executes
userGuest.admin?.();//is there a function admin? the answer is nothing, because there is no function

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); //just like a function returned the result, here the content of the key will show
//if it exists
alert( user2?.[key] ); // program executes without errors, there is no key, but because this is not a function
//here undefined is shown, saying that the key does not exist

//using with delete
delete user?.name; //deletes the property name if it exists.  otherwise nothing happens
*/
//CAUTION ?. is not use for assignment, it's not the equivalent of an if statement
let user = null;
user?.name = "John";//error, syntax, invalid left slide (should be user.name)