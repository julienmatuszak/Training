//a method is a function of an object
/*
let user = {
    name: "John",
    age: 30
};
/*
user.sayHi = function() {
    alert("Hello!");
};

user.sayHi();

//with declaration
function sayHi() {
    alert("Hello!");
};

user.sayHi = sayHi; //we add the function as a method, so we don't call it, it is just assignment, so no ()
user.sayHi(); //now we can call the function

//METHOD SHORTHAND
//Those 2 methods are equivalent
user = {
    sayHi: function() {
        alert("Hello");
    }
};

user = {
    sayHi() {
        alert("Hello");
    }
};

//this is the current object
let user = {
    name: "John",
    age: 30,
    sayHi() {
        alert(this.name);
    }
};

user.sayHi(); //the method is associated to the object user
//this is the equivalent but then we cannot copy the object and use the method, because it will access the wrong object
let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name);
    }
}
let admin = user;
user = null;
admin.sayHi();
//admin and user point at the same object, that we have rendered null, we cannot call sayHi on it
//this however, is not bound. Unlike other programming languages, it can be used in any function
function sayHi() {
    alert( this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert( this.name );
}

user.f = sayHi;
admin.f = sayHi;

admin['f']();//shows Admin, the 2nd way to run the method

user = null;
admin.f();//still works, this is the 1st way

//the function can be called without object, it will just return undefined in strict mode and global object window otherwise
function sayHi() {
    alert(this);
}
// this is unbound in javascript, it does not reference to one object or class, this is evaluated at call time
//and does not depend on where the method was declared but on what the object is before the dot
//the positive side is that a function can be reused. but it can also lead to make more mistakes

sayHi();

//arrow functions have no this of their own. They just return 
let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);//this or user work the same
        arrow();
    }
};

user.sayHi();//this is taken from outside

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
  }
  
  let user = makeUser();//with ref: this, this leads to undefined, because this is not called as a method
  //if we define another function within a function and let it return this, then we can call it as a method
  alert( user.ref().name );

  //CALCULATOR
  let calculator = {
    //no need to define the members, just methods will do (very different than other languages !)
    //this can be used freely within the methods
      read() {
        this.a = +( prompt("a?", 0) );// no need to convert with number, just use +
        this.b = +( prompt("b?", 0) );//remember to initialize the prompt, just to show a number and have sth
      },
      sum() {
        return this.a + this.b;
      },
      mul() {
          return this.a * this.b;
      }
  };

  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  */
 let ladder = {
     step: 0,
     up() {
         this.step++;
         return this;
     },
     down(){
         this.step--;
         return this;
     },
     showStep: function() {//shows the current step
        alert( this.step );
        return this;
     }
 };

 ladder
    .up()
    .showStep()
    .up()
    .showStep()
    .down()
    .showStep();//cannot read properties of undefined. so we have to turn the object
 // to the property, we just return this then