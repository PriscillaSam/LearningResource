// object defination
var user = {
  name: "Blessing",
  stateOfOrigin: "Abia",
  noOfSiblings: 1
};

var car = {
  model: "Hyundai",
  color: "red",
  year: 2016
};
// object properties
// ways of assigning properties to objects
var country = {
  states: 36
};

// dot operator
country.continent = "Africa";

// using square brackets
country["states"] = 36;

// accessing object properties

// console.log(country.continent);
// console.log(country.states);

var ruqoyat = {
  firstName: "Ruqoyat",
  lastName: "Falade",
  state: "Lagos",
  getFullname: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

var property = "state";

// console.log(ruqoyat.firstName);
// console.log(ruqoyat.state);
// console.log(ruqoyat["state"]);
ruqoyat.getFullname();
// the this keyword

// accessing object methods

// write a program that prompts the user for their first name, last name and age, and store it in an object named userData

var firstName = prompt("What is your first name");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");

var userData = {
  firstName: firstName,
  lastName: lastName,
  age: age
};

console.log(userData);
