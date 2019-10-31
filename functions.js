// function syntax
function sumTwoNumbers(x, y) {
  // code goes here
  // var sum = x + y;
  return x + y;
  // console.log(sum);
}

// function invocation using the () operator
var sumOfTwoNumbers = sumTwoNumbers(2, 8);

function printMyDetails(firstName, lastName, age) {
  console.log(
    "My first name is " +
      firstName +
      " my last name is " +
      lastName +
      " my age is " +
      age
  );
}

let subtractionResult;

function subtractTwoNumbers(a, b) {
  subtractionResult = a - b;
}

subtractTwoNumbers(9, 5);

// function return values
// function reusability
// functions used as variable values
// local variables

// write a function that can take an array of numbers, add them and return the value
function findTotal(a, b, c, d) {
  var total = a + b + c + d;
  return total;
}

var totalSum = findTotal(4, 19, 50, 14);
// console.log(totalSum);

//Write a function that prints welcome to my website on the console

// Write a function that takes two numbers and returns the remainder from dividing the numbers

// function that displays a message to the user based on the length of their name

function displayMessage(name) {
  var nameLength = name.length;

  if (nameLength <= 5) {
    console.log("Your name is too short");
  } else {
    console.log("Your name is alright");
  }
}

displayMessage("Omniqu");

// write a function that prompts a user for their age
function checkUserAge() {
  var age = prompt("How old are you?");
  if (age < 18) {
    alert("You are still a teenager");
  } else {
    alert("Yess!!! you are now an adult");
  }
}

checkUserAge();
// if age is less than 18 display on an alert You are still a teenager
// if age is greater than 18 display Yess!!! you are now an adult
var age = "15";
var convertedString = Number(age);
