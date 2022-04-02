
const obj =
{
    f1:"hello",
    f2:"Everyone",
    f3:"Welcome",
    f4:"Back to",
    f5:"Daily Tuition"
};

//control flow statement
for (let f in obj)
{
    console.log(obj[f]);
}

const obja = {};

const y = obja; //this is a reference

y.d = "Property Created Using Reference";
console.log(obja.d);

//class
class Model{
    constructor(Mno, Mname){
        this.Mno = Mno;
        this.Mname = Mname;
    }
    //method
    show(){
        console.log(`Model Number : ${this.Mno}
        Model Name : ${this.Mname}`);
    }
}

//to access the class, we need to instantiate instanceof, we create an instance of the class
const obj1 = new Model();
const obj2 = new Model(550, "BMW");//we have two different objects
obj2.show();

//use of instanceof
console.log(obj1 instanceof Model);

//prototypes
let f = function(){
    this.a = 1;//1st property
    this.b = 2;//2nd property
}

let o = new f();//creates instance of a function with keyword new
o.d = 5; //create property with instance

f.prototype.b = 3;//override property b if it does not exist
f.prototype.c = 4;//creates prototype c property but this is invisible, it is shown in the console though

console.log(o.a);
console.log(o.b);//2 because value 3 is from prototype which is invisible
console.log(o.c);//invisible because prototypes
console.log(o.d);//property created without prototypes so it shows

console.log(o);
console.log(f.prototype);//to show the prototypes

//static methode with this reference
class StaticClassMethod{
    constructor(){
        
        console.log(StaticClassMethod.onCall());
        console.log(this.constructor.onCall());//this statement works as well when you create an instance

    }
    static onCall(){
        return "This is a static method";
    }
    /*static onCall2(){
        return `${this.onCall()} called using another static method.`;
    }*/
}
const st = new StaticClassMethod();//this executes the method when instantiated
//this above can be called with the constructor method of this (see above)

//console.log(st.onCall()); //error there is not as a function if parentheses
//console.log(StaticClassMethod.onCall());//function is called with the model
//console.log(StaticClassMethod.onCall2());//this is right because we called with this
//the first method is better

class Person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
}

class Age extends Person{
    constructor(age){
        //call super() method
        super("Harry", "Dim");
        this.age = age;
    }

    //create method to display fname, lname and age
    Showup(){
        console.log(this.fname+ " " + this.lname);
        console.log(`Your age is ${this.age}`);
    }
}
//no need to create instance above to modify properties

//create instance of child class
const d = new Age(23);
d.Showup();//shows harry dim and age 23 because of the super method that overrides the variables of the parent class
console.log(d.fname);

//prototype and classes - prototype inheritance
let car = {
    Wheel: "four",
    Model: "Tesla",
    show(){
        console.log(`Car Model ${this.Model}, Have ${this.Wheel} Wheel`);
    }
};

let bike = {
    CC:250,
    __proto__: car
};

let bicycle = {
    Gear: 5,
    __proto__: bike
};

//bike.__proto__ = car;// no need now because in variable bike
console.log(bike);//shows what is inside bike

console.log(bike.CC);//250
console.log(bike.Wheel);//shows four because bike has inherited from car, same for Model

console.log(bicycle);//now we can access all the properties and variables of car and bike

class Employee{
    constructor(name){
        this.name = name;
    }

    //method
    EmployeeName(){
        console.log(`Employee Name ${this.name}`);
    }
}

//inherit parent class
class Member extends Employee{
    constructor(name, salary){
        super(name);//call parent class constructor with child class parameters
        this.name = name;
        this.salary = salary;
        this.age = 30; // override age property
    }

    EmployeeName(){
        console.log(`Employee Name ${this.name}, Age ${this.age} and Salary ${this.salary}`);
    }
}

//create instance of the child class
const mb = new Member("Neel Patel", 35000);
mb.EmployeeName();//shows name and salary shows either the one from parent or child depending on the name Employee() or EmployeeName()
//now override age property when added

const dt = new Date();

console.log(dt);
console.log(dt.toString());

console.log(typeof dt);//this is an object
console.log(typeof dt.toString());//this is a string

//maps of objects
//we use setters and getters
const Mymaps = new Map(); //new map object

let keyString = "KeyString", keyObj = {}, keyFunc = function(){};
//define the keys above

//use set() method to set key to value
Mymaps.set(keyString, "KeyString Value");
Mymaps.set(keyObj, "KeyObj Value");
Mymaps.set(keyFunc, "KeyFunc Value");

console.log(Mymaps.size);//no parentheses as always

//get the values
console.log(Mymaps.get(keyString));
console.log(Mymaps.get(keyObj));
console.log(Mymaps.get(keyFunc));

Mymaps.set(NaN, "Not a Number");
console.log(typeof NaN);
console.log(Mymaps.get(NaN));

//iterate a map object
for(let[key, value] of Mymaps){
    console.log(`Map Keys : ${key}, Values: ${value}`);
}//shows all the keys and values pairs

//second way to iterate the map object
const NewMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);

NewMap.forEach(function(value, key){
    console.log(`Map Keys: ${key}, ${value}`);
});

//weakmap and garbage collection
let user = {
    name: "Daily"
};
console.log(user.name);
user = null;
//console.log(user.name);//garbage is collected, shows an error.

let weakmap = new WeakMap();

let objb = {}, objc = {};

//set key and value
weakmap.set(objb, "Private");
weakmap.set(objc, "Private Data");

console.log(weakmap.get(objc));//get and set work

/*no iteration
for(let [key, value] of weakmap){
    console.log(key);
    console.log(value);
}*/

//set object
const st2 = new Set();
st2.add(1);
st2.add(2);
st2.add(1);//will not add because same values
console.log(st2);

const st3 = new Set([1,2,3,4,4]);
st3.add({a:"One", b:"Two"});//adding an object
console.log(st3);

//has method to see if an element is present
console.log(st3.has(5));

st3.delete(4);
console.log(st3);

//iterate 1st way
for(let item of st3){
    console.log(item);
}

//2nd way of iteration
st3.forEach(value => {
    console.log(value);
})

//weakset
const ws = new WeakSet();
let objd = {}, foo = {};

ws.add(objd);
ws.add(foo);
console.log(ws);

ws.delete(foo);
console.log(ws);
console.log(ws.has(foo));

//length of an arrya
var aaa = ['dog'];
aaa[100] = 'fox';
console.log(aaa); 

console.log(0 && h);

sum(10, 20);
//diff(10, 20);
function sum(x, y) {
return x + y;
}   
/*console.log(sum(10,20));
let diff = function (x, y) {
return x + y;
};*/

console.log([] == []);
//console.log(f2());

function printA() {console.log(answer);var answer = 1;} printA(); printA();

//arrow function
(a,b) => c;

function logThis() {console.log(this);} logThis();

var obj3; console.log(obj3);