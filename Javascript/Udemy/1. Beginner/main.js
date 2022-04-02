
  "use strict";
  switch(temp)
{
    case 24.5:
        console.log(`The temperature outside is ${temp}`);
        break;
    default:
        console.log(`The temperature is not ${temp}`);
        break;
}

  //call() method
  /*function Mag()
  {
      return `Welcome to ${this.name}`;
  }
  const obj1={name:"d"};
  const obj2 ={name:"t"};
  console.log(Mag());
  console.log(Mag.call(obj1));*/

  //scopes
  const xa = 5;
  function fd(){
      console.log(xa); //local scope but we call outside the local scope
      //because scopes not defined
      //console.log(yq);//uncaught
  }
  fd();

  //block scoping
  console.log("Block Start..");
  {
      console.log("Inside Block");
      const xb = 5;
      console.log(xb);
  }
  //console.log(`${xb}`);//error message because xb is defined inside the block
//this is the same as local scope

  //closure
  function Counter(){
      let count = 0;

      return function(){//inner function
          return count ++;
      };
  }
  console.log(Counter());//shows what is inside
  let counter = Counter(); //closure to access the function inside
  console.log(counter());//can access the function with the closure
  console.log(counter());//increment

let closure;
{//block
    let block = "Character";

    closure = function(){
        console.log(block);
    }
}
//console.log(block);not working bc block scope
closure();//closure can access the function

let ff;
{
    let objg = {name:"char"};
    ff= () => {return objg;};
}
//console.log(objg.name);
console.log(ff());//can access the objg properties
let ref = ff();//closure
console.log(ref.name);//shows 'name'

//IIFE
(function()
{
})();
//we add parentheses here IIFE
const fh = (function(){let str = "immediatel invok fun expr"; return str;})();
console.log(fh);//shows the string
//if no parentheses, we get the reference to a function's inside
const fi = function(){let str = "immediatel invok fun expr"; return str;};
console.log(fi);

//difference between 
const fj = (function(){let count =1; return function(){return `Value of the count:${count++}`;}})();
console.log(fj);//gives the ref
console.log(fj());
console.log(fj());//increment

//difference let var
var v = 4;
console.log(v);
console.log(xg);
var xg=4;//shows undefined because var is searched in the entire scope.
//let xg = 4; in this case, we get a syntax error

for(var ii=0;ii<3;ii++)
{
    console.log(ii);
}
console.log("Outisde " + ii);
for (let kk = 0; kk < 3;kk++)
{
    console.log(kk);
}

//console.log(kk);//reference error because outside of scope and not defined anymore


//xy = "Global";//undefined because we have used a strict mode
//console.log(xy);

/*(function(){
    "use strict";//we use the strict mode in the local scope to secure the messages

    xz = "global";
    console.log(xz);
})();*/

//arrays
const arr5 = [
{name:"daily", videos:15},
[function(){return "contain array";},
"three"]
];
console.log(arr5[1][0]);//we access the reference of the function
console.log(arr5[1][0]());//we access the function

//manipulate array
const arrg = [2,3,4];
console.log(arrg);//shows the whole array
console.log(arrg.push("a"));//returns length (4)
console.log(arrg.pop());
console.log(arrg);
console.log(arrg.unshift(1));//add element return length(4) and add at the beginning
console.log(arrg);
console.log(arrg.shift());//removes the 1st element and returns the element
console.log(arrg);

//slice() splice() concat()
const arrh = [1,2,3];
console.log(arrh);
console.log(arrh.concat(4,5,6));
console.log(arrh);//[1,2,3] concats does not transform arrh
const arri = [1,2,3,4,5,6];
console.log(arri.slice(2));//creates an array from element 2 exclusive
console.log(arri.slice(2,4));//slice from element 2 exclusive to 4 inclusive, so 3 and 4
console.log(arri.slice(-1));//slice from element before the last exclusive

const arrj = [1,4,5];
arrj.splice(1,0,2,3,7);//starts from 1st element, deletes 0 element, then add the next here 2,3,7
console.log(arrj);
arrj.splice(2,1);//starts from element 2 and remove the next element
console.log(arrj);//1,2,7,4,5
//copywithin() fill()
arrj.copyWithin(1,2);//copy all elements from 2 starting on index 1. so, 1,7,4,5,5 (7,4,5 have been copied and 5 does not move)
console.log(arrj);//1,7,4,5,5
arrj.copyWithin(1,2,3);//only copy from index 2 to index 3 exclusive so only 4 on 7
console.log(arrj);
const arrk = [1,2,3];
arrk.fill("hi",2);//fil; with "hi" at index 2
console.log(arrk);
const arrl = [1,2,3,4,5];
arrl.fill("d",1,4);//only fills to index 3 exclusive
console.log(arrl);

//map function
const arrm = [1,2,4,8];
const map1 = arrm.map( (x) => x*2); //specify an argument
console.log(map1);//map has been affected with the function
const cart = [ {product:"laptop", price:55000}, {product:"mobile", price:14000}];
const prod = cart.map(x => x.product);//we put in our map "prod", only the products
console.log(prod);//this map returns the values according to the key entered in the map function
const price = cart.map(x => x.price);
console.log(price);