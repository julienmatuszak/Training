/*
we can also assign method on class function itself, not to the prototype
this is called static.

class User {
  static staticMethod() {
    alert(this === User);
  }
}
User.staticMethod(); // true

class User { }
User.staticMethod = function() {
  alert(this === User);
};
User.staticMethod(); // true

the value of this in this static method calls the class constructor itself

ex. with article.compare:
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}
// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];
articles.sort(Article.compare);
alert( articles[0].title ); // CSS

compare is a method of the whole class

Another method:
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}
let article = Article.createTodays();
alert( article.title ); // Today's digest
// assuming Article is a special class for managing articles
// static method to remove the article:
Article.remove({id: 12345});

STATIC PROPERTIES
class Article {
  static publisher = "Ilya Kantor";
}
alert( Article.publisher ); // Ilya Kantor
Article.publisher = "Ilya Kantor";

INHERITANCE OF STATIC PROPERTIES AND METHODS
class Animal {
  static planet = "Earth";
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}
// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}
let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5)
];
rabbits.sort(Rabbit.compare);
rabbits[0].run(); // Black Rabbit runs with speed 5.
alert(Rabbit.planet); // Earth
THE SAME METHOD APPLIES AS FOR CLASSES
class Animal {}
class Rabbit extends Animal {}
// for statics
alert(Rabbit.__proto__ === Animal); // true
// for regular methods
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true

*/