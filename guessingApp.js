// write a function to randomly generate a number between 1 and 10
const input = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submit");
const guess = document.getElementById("guesses");
let noOfGuesses = 5;

function generateRandomNumber() {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
}

const randomNumber = generateRandomNumber();

function checkUserGuess(event) {
  const userInput = Number(input.value);
  noOfGuesses--;

  if (userInput === randomNumber) {
    feedback.innerHTML = "Your guess is correct";
  } else if (userInput > randomNumber) {
    feedback.innerHTML = "Your guess is too high";
    guess.innerHTML = "You have " + noOfGuesses + " left";
  } else if (userInput < randomNumber) {
    feedback.innerHTML = "Your guess is too low";
    guess.innerHTML = "You have " + noOfGuesses + " left";
  }
}

submitButton.addEventListener("click", checkUserGuess);
