/*
The basic DOM elements are:
- document (the basic root element)
- root element <html>
- subroot element: <body> with subsubelements <a> <h1> and text and others like attribute <href>
- subroot element: <head> with subsubelement <title> and text

In the webpage:
Javascript can change all the HTML elements and attributes and all CSS styles.
Javascript can remove existing elements and attributes and add new ones.
Javascript can react to all existing HTML events and create new ones.

DOM is document object model, a platform and language-neutral interface that allows programs and
scripts to dynamically access and update the content, structuer and style of a document.
There are 3 main DOM: Core, XML and HTML DOM.

In the DOM all HTML elements are defined as objects. The programming interface is the properties
and methods of each object. A property is a value that can be gotten (with a getter or get function)
or set (with a setter or a set function). A method is an action that modifies the object, for
example add or delete an HTML element.

The document object is the parent of all objects in a web page.
Before accessing any element in the web page, the document needs to be accessed.
There are several ways to access the document:

1- Finding HTML elements
document.getElementById(id) find an element by element id
document.getElementsByTagName(name) find elements by tag name
document.getElementsByClassName(name) find elements by class name

2- changing html elements
element.innerHTML = new html content      change the inner HTML of an element
element.attribut = new value            change the attribute value of an HTML element
element.style.property = new style      change the style of an HTML element
element.setAttribute(attribute, value)  change the attribute value of an HTML element

3 - adding and delete elements
document.createElement(element)     create an HTML element
document.removeChild(element)       remove an HTML element
document.appendChild(element)       add an HTML element
document.replaceChild(new, old)     replace an html element
document.write(text)                write into the HTML output stream

4 - adding events handlers (handlers are routine functions)
document.getElementById(id).onclick = function() {code}   adds event handler code to an onclick event

5 - finding HTML objects
document.anchors  returns all <a> elements that have a new attribute
document.applets  deprecated
document.baseURI  returns the absolute base URI of the document
document.body     returns the <body> element
document.cookie   returns the document's cookie
document.doctype  returns the document's doctype
document.documentElement  returns the <html> element
document.documentMode     returns the mode used by the browser
document.documentURI      returns the URI of the document
document.domain           returns the domain name of the document server
document.domConfig        obsolete
document.embeds  returns all the <embed> elements
document.forms    returns all the <form> elements
document.head   returns all the <head> elements
document.images returna all the <img> elements
document.implementation returns the DOM implementation
document.inputEncoding  returns the document's encoding (character set)
document.lastModified   returns the date and time the document was updated
document.links  returns all <area> and <a> elements that have a href attribute
document.readyState returns the (loading) status of the document
document.referrer returns the URI of the referrer (the linking document)
document.scripts returns all <script> elements
document.strictErrorChecking  returns if error checking is enforced
document.title  returns the <title> element
document.URL  returns the complete URL of the document

ELEMENTS
We often need to manipulate HTML elements. First, we have to find the elements.
There are several ways to do this:
- finding HTML elements by id
- finding HTML elements by tag name
- finding HTML elements by class name
- finding HTML elements by CSS selectors
- finding HTML elements by HTML object collections

The most common is to find by id, especially when we need to find one element.
const element = document.getElementById("intro"); or any other method, like tag name, etc.
If the element has the tag id="intro", the method returns the element if it finds it.
otherwise, the method will return null in the myElement object of the element.
With the next method, the js engine works a bit differently:
const element = document.getElementByTagName("p"); will look for all paragraph tags (<p>)
and return an array of elements (there can be only one).
Those 2 methods can be combined to find an element in another element.

Note that we need to define a reference element to be able to use the first method, so we
introduce a HTML tag <p id="demo"></p>
The className method is very popular because the class type is very useful.
To find all HTML elements that match a specified CSS selector, such as id, class names,
types, attributes, values of attributes, etc., the method querySelectorAll() is used.
const x = document.querySelectorAll("p.intro");
All the elements matched (here all the paragraphs) with they keywords intro in them
will be gathered in an array.

For object collections, such as forms, the elements could be iterated.
For example, in the forms collection, such a snippet could be found:
const x = document.forms[("frm1")];
//we reach the form and we get an array of all the elements inside
let text = "";
for (let i = 0; i < x.length); i++) {
  text += x.elements[i].value + "<br>";
// we gather all the items of the collection and display the value of each one
}
document.getElementById("demo").innerHTML = text;
We could get other objects (or object collections), such as anchors, body,
documentElement, embeds, forms, head, images, links, scripts, title.

When there is no id, we can write directly to the main object (document)
with the method write.

Javascript can handle forms, for example to validate them with a function
function validateForm() {
  let x = document.forms["MyForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false; // we see that the forms method returns true or false depending on if there is a value or not
  }
}

The tags must be implemented in the form tag, such as action="whichever php page will handle the actin"
as well as what happen after the click event on submit => onsubmit="return validateForm()"
and the type of method (here, this is post)

Here, the input will be received as fname="name given" by the php page which will handle it

Js can also validate input for example with a function that will refuse input if the isNaN method return false

In modern browsers, the keyword required can be added to the form tag so that the browser will
associated to the input tag, the browser will require an input in order to proceed

Data validation is very often used with js. There are usually 3 principles:
- the data must be filled in every required field
- the data must be valid for each required field
- there cannot be text data in a numeric input field

Data validation can then happen server-side and/or client-side. In the former, the data is validated
by the server (that's usually what happens with social networks like Facebook), the latter
is validated by the browser, that could be the case for example with plugins.

HTML now enforces constraint validation. This means that depending on keywords in tags, the validation
process will differ.
We just saw required, that is an HTML input attributes constraint
There are as well CSS pseudo selectors and DOM properties and methods
e.g.: disabled specifies that the input element should be disabled
max specifies the maximum value of an input element
min same with min value
pattern specifies the pattern of an input element
and type for the type of an input element

For css pseudo selectors
:disabled works the same, it just specifies an attribute to the element associated
:invalid attribute specifies invalid valued
:valid contrary of invalid
:required and :optional specifies if the elements are required or optional


*/