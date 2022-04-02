import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';
//import Car from './App.js';

//const myelement = <h1 className="myclass">Hello World</h1>;

/*class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

function Car() {
    return <h2>Hi, I am also a Car!</h2>;
}


class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return <h2>I am a {this.state.color} Car!</h2>;
    }
}


//Using props, accessed within the render method of ReactDOM object

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!</h2>;
    }
}

ReactDOM.render(<Car color="red" />, document.getElementById('root'));

//components in components
//here, our two classes are intertwined and both have React.Component as prototype 
//in order to use their method render().
class Car extends React.Component {
    render() {
        return <h2>I am a Car!</h2>; 
    }
}

class Garage extends React.Component {
    render() {
        return(
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car />
            </div>
        )
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
*/
//React is about reusing code and it can be smart to insert some of your
//components in separate files.
//In that case, we imported the Car class from another file and we add the line
//ReactDOM.render(<Car />, document.getElementById('root'));

/*
Props are arguments passed into React components
They are passe via HTML attributes
React props are like function arguments in js and attributes in html
This is why we use the same syntax as HTML attributes
*/
/*
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2> //we use the property section then brand
        //brand is an html attribute defined in the variable used in render
    }
}

const myelement = <Car brand="Ford" />;

ReactDOM.render(myelement, document.getElementById('root'));
*/
/*
Props are also how you pass data from one component to another, as parameters.
*/
/*
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return(
            <div>
                <h1>Who lives in my garage?</h1>
            <Car brand="Ford" />
            </div>//the brand is defined here not outside this time
        );
    }
}
ReactDOM.render(<Garage />, document.getElementById('root'));

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}</h2>;
    }
}

class Garage extends React.Component {
    render() {
        const carname = "Ford";
        return(
            <div>
                <h1>Who lives in my garage?</h1>
                <Car brand={carname} />
            </div>//here we defined the prop as a variable defined before in the function
        )
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'));

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand.model}</h2>;//now we will define an object instead of a variable
    }
}

class Garage extends React.Component {
    render() {
        const carinfo = {name: "Ford", model: "Mustang"};//those are the properties we could call
    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <Car brand={carinfo} />
        </div>
    );
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'));

//Finally, we can have the props inside the constructor.
class Car extends React.Component {
    constructor(props) {
        super(props);//we use the props of the prototype
    }
    render() {
        return <h2>I am a {this.props.model}!</h2>;//we have to take the object props so we use this
    }
}

ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));

//NOTA BENE: props are read-only, ther will be an error if you try to change their value

//Because objects have many properties, we can define a state property in the constructor

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById('root'));
*/
/*
To change a value in the state property of the object, we use the this.setState() method.
*/

/*
Lifecycle of components
Each component in React has a lifecycle which you can monitor and manipulate during
its three main phases: mounting, updating and unmounting.
Mounting
mounting means putting elements into the DOM
React has four built-in methods that gets called, in this order, when mounting a component:
1.constructor()
2.getDerivedStateFromProps()
3.render()
4.componentDidMount()
The render() method is required and will always be called, the others are optional and
will be called if you define them.

The constructor method is called, by React, every time you make a component

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: 'red'};
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));
*/
/*
The getDerivedStateFromProps() method is called right before rendering the element
in the DOM. This is the natural place to set the state object based on the initial props.
It takes state as an argument, and returns an object with changes to the state.
*/
/*
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {//this method cannot be called on instamces.
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
//here when favcol is called in props, js engine will look for it in the props and 
//will find the static method that will act as the equivalent of setstate
*/
//The render() method is required, and is the method that actually outputs the HTML to the DOM.
/*
The componentDidMount() method is called after the component is rendered. This is where 
the statements that require that components are already place in the DOM are run.

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() =>{//after rendering we add a component that modifies the behavior of the page
            this.setState({favoritecolor: "yellow"})
        }, 1000);
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));
*/
/*
Updating is the next phase, it happens whenever there is a change in the component's
state or props.
There are five built-in methods:
getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
we don't have constructor method dedans

we have a shouldcomponentupdate to see if there is a need to update or not
we have getsnapshobeforeupdate

the others are the same. once again, only render is required.

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
      return true;
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  ReactDOM.render(<Header />, document.getElementById('root'));
  //we simply return a boolean true or false
  //so the button has no use
  //if true then the button will change the color
  //note that we need a method to return to blue

//getsnapshot needs as well componentdid, we have access to props and state before the update

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {//we can access the prevstate
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="div1"></div>
          <div id="div2"></div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('root'));
*/

/*
The last stage is unmounting, it only has one method attached componentWillUnmount()
we have to use the show: true set to default automatically.
To check this property, we set the property in the constructor
then we create an arrow function to set the show to false, in order to use the method
componentWillUnmount()
We tie the method to the button click event, when we click and stop showing the prop, the
method is triggered, here alerting a message.

class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }
  
  ReactDOM.render(<Container />, document.getElementById('root'));
*/

/*
React can act on event (we saw an example with onClick), please note that in React
events are written in camelCase. Also, they are written in brackets, not double
quotes as in html.
We oftne use this with events, in React, this is bound with the components that own the
method. This is why we use arrow functions (as they have no this).
*/
/*
class Football extends React.Component {
    constructor(props){
        super(props);
        this.shoot = this.shoot.bind(this);
    }
    shoot () {
        alert(this);
    }
    render() {
        return(
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'));
*/
/*
if we used regular function, this could be any object defined by the browse, usually 
window, but it really depends.
NOTA BENE, here we have bound the method shoot to this if we don't use the arrow
function method
There are 2 options to pass argument: make an anonymous arrow function or bind the event handler to this
*/
/*
class Football extends React.Component {
    shoot = (a) => {
        alert(a);
    }
    render() {//careful we don't write the argument here, because this will be the result of onClick
        return (
            <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
       );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'));


class Football extends React.Component {
    shoot(a) {
        alert(a);
    }
    render() {//careful we don't write the argument here, because this will be the result of onClick
        return (
            <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
       );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'));
*/

/*
Event Object
Event handlers have access to the React event tha triggered the function, the event above is click
with the arrow function you have to send the event argument manually
*/
/*
class Football extends React.Component {
    shoot = (a, b) => {
        alert(b.type);//b represents the React event tha triggered the function here the click
    }
    render() {
        return (
            <button onClick={(ev) => this.shoot("Goal", ev)}>Take the shot!</button>
        );
    }//here, we write ev instead of b to show that be is the event
}
ReactDOM.render(<Football />, document.getElementById('root'));
//now we will show ev because the alert function asked to return it

class Football extends React.Component {
    shoot(a, b){
        alert(b.type);//b represents the React event tha triggered the function here the click
        //remember that type is the property of the event like typeof for js data types
    }
    render() {
        return (
            <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
        );//here the object is sent, no need to write the arguments as this is not an arrow function
    }
}
ReactDOM.render(<Football />, document.getElementById('root'));
*/
/*
forms in react are just like any other element
handling them depends on how you handle the data when it changes value or is submitted
in html it is usually the dom
in react it depends on the components
im react all the data is stored in state
those changes can be monitored with the onChange attribute
*/

/*
class MyForm extends React.Component {
    render() {
        return (
            <form>
                <h1>Hello</h1>
                <p>Enter your name:</p>
                <input 
                    type="text"
                />
            </form>
        );
    }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
            />
            </form>
        );//we have added the prop myChangeHandler, it is an arrow function that will set the state of the username of the object myform
    }
}//because here the state set is the target it means that everytime the target changes in the input (every character input) the Hello will change
//because the prop object depends on the username

ReactDOM.render(<MyForm />, document.getElementById('root'));
*/

/*
It is important to initialize the state in the constructor in ordeer to use setState
careful about the syntax, we change the value not the target object

Conditional rendering
if we want to see the input only after a certain action we can use an if statement in the former construction

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render() {
        let header = '';//we define a new variable that will be used for the conditional rendering
        if(this.state.username) {//if there is a property
            header = <h1> Hello {this.state.username}</h1>;//we define the header
        } else {
            header = '';//otherwise header is a null object
        }
        return (//remember to put the header in the curly braces form to inject react content to html content
            <form>
                {header}
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
            />
            </form>
        );//careful, the if statement is directly in the render, because it will directly act on the html page
    }
}//now hello only appear when there is an input because otherwise there is no header

ReactDOM.render(<MyForm />, document.getElementById('root'));
*/

/*
how to submit forms
we simply add another function that will handle the submission of the form
we have to add a built in method called preventDefault() to prevent the from from being submitted here
because there is no handling of it afterwards
*/

/*
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    //a new function to handle submission
    mySubmitHandler = (event) => {
        event.preventDefault();//we prevent the form from being sybmitted
        alert("You are submitting " + this.state.username);//we are not going to submit anything here, it is just for the sake of showing how submission works
    }
    render() {
        return (//we have to add the function INSIDE THE FORM TAG HERE after the event onSubmit
            //very careful about the notation, here we don't call the function we add it so no () and arguments, the argument is the onSubmit
            //itself
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
            />
                <input
                    type='submit'
                />
            </form>
        );//careful, the if statement is directly in the render, because it will directly act on the html page
        //note that we add a submit input button
    }
}//now hello only appear when there is an input because otherwise there is no header

ReactDOM.render(<MyForm />, document.getElementById('root'));
*/

/*
multiple input fields
we can handle several fields by naming them differently with the name attribute
the field names have to be initialized in the constructor
we use the properties event.target.name event.target.value
we still update wit the setState method
*/
/*
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render(){
        return(
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                type='text'
                name='username'
                onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                type='text'
                name='age'
                onChange={this.myChangeHandler}
                />
            </form>          
        );
    }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
//it is important to notice that we use the [] to refer to the key, here the key is nam
*/

/*
Validating form input
there are two way. validating while typing or wait until the form gets submitted
*/
/*
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if(nam == "age") {//now we handle errors, it is dynamically executed, as event changes 
            if(!Number(val)) {
                alert("Your age must be a number");
            }
        }
        this.setState({[nam]: val});
    }
    render() {
        return (
          <form>
          <h1>Hello {this.state.username} {this.state.age}</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Enter your age:</p>
          <input
            type='text'
            name='age'
            onChange={this.myChangeHandler}
          />
          </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
*/
/*
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
      };
    }
    //here we added this method bound to onSubmit event, so the conditional statement will be executed on submit
    mySubmitHandler = (event) => {
      event.preventDefault();
      let age = this.state.age;
      if (!Number(age)) {
        alert("Your age must be a number");
      }
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        <br/>
        <br/>
        <input type='submit' />
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));
  */

  /*
  We can modify the errormessage with the errormessage object property of the state property
  we use setState to modify the errormessage property
  */

  /*
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
        errormessage: ''//we have to initialize the errormessage at first
      };
    }
      myChangeHandler = (event) => {
          let nam = event.target.name;
          let val = event.target.value;
          let err = '';//we will use that new variable to display the message instead of the former alert message
          if (nam === "age") {
              if(val != "" && !Number(val)) {//in case this is not nyumerci, we also have to add the condition val != "" in case we input nothing
                err = <strong>Your age must be a number</strong>;
              }
          }
          this.setState({errormessage: err});
          this.setState({[nam]: val});
        }
      render() {
          return (
              <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                    <input
                    type="text"
                    name="username"
                    onChange={this.myChangeHandler}
                    />
                <p>Enter your age:</p>
                <input
                    type='text'
                name='age'
                onChange={this.myChangeHandler}
                />
                {this.state.errormessage}
              </form>
          );
        }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
*/

/*
textarea is very straightforward we just define the state as an object property called description and we bound this descipriotn to the html that
will be rendered
we just add the description to the value of the textarea tag
*/

/*
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'The content of a textarea goes in the value attribute'
    };
  }
  render() {
    return (
      <form>
      <textarea value={this.state.description} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
*/

/*
Finally, the select value is designed to be a select box and is pretyy esaily implementable
we don't need to set anything apart from some properties in the state of the constructor
then we add this property to the value of select html tag in the render function
*/
/*
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mycar: 'Volvo'
      };
    }
    render() {
      return (
        <form>
        <select value={this.state.mycar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));
  */

  /*
  CSS
  There are many ways to style React with CSS
  we will focus on inline styling
  the value for inline styling myst be a js object
  IMPOIRTANT NOTE: IN JSX javascript expressions are written inside curlybraces and since js objects also
  use curly braces, we have to wrap the object inside a readable ovject for jsx
  the camelCase is also use, contrasting with html case
  */

  /*
  class MyHeader extends React.Component {
      render() {
          return(
            <div>
                <h1 style={{color: 'red'}}>Hello Style!</h1>
                <p>Add a little style!</p>
            </div>
          );
      }
  }

  ReactDOM.render(<MyHeader />, document.getElementById('root'));
  */

/*
class MyHeader extends React.Component {//don't forget the camelCase for background-color(this is in HTML)
  render() {
    return (
      <div>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
*/

/*
OIbjects can direcly be created with styling information
*/

/*
class MyHeader extends React.Component {
    render() {//we directly add the style in the render functionm just like everything else
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return(
            <div>
            <h1 style={mystyle}>Hello Style!</h1>
            <p>Add a little style!</p>
            </div> 
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));
*/

/*
class MyHeader extends React.Component {
    render() {
      return (
        <div>
        <h1>Hello Style!</h1>
        <p>Add a little style!.</p>
        </div>
      );
     
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));
*/

/*
Css modules are another way of adding styles to the app they are convenient for components place din separate files
it is available only for the component that iported it so we are ok with name conflict
*/

/*
ReactDOM.render(<Car />, document.getElementById('root'));
*/

/*
React SASS. It means a CSS preprocessor
SASS fukles are executed on the server and sends CSS to tghe browser

*/