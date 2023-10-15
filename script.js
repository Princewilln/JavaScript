// const products = [];

// function addItem () {
//     let item = prompt("name of produc?")
//     let quantity = prompt("enter quntity: ")
//     products.push([item, parseInt(quantity)])
//     console.log(products)
// }

// addItem();


// function areaOfCircle(r) {
//     let Area = Math.PI * r ** 2
//     console.log(Area)
//   }
// areaOfCircle(8);

// const days = ['James', 'Kavita', 'Richard'];

// for (const name of names) {
//   console.log(name);
// }

// if userChoice is not "rock" or "paper" or "scissor" -> log(invalid input, try again)

// userChoise is valid
//   console.log(userChoice)
// no valid
//   console.log("invalid input, please try again!")

//   if(userChoice === "rock") {
//     console.log("rock")
//   }else if(userChoice === "paper") {
//     console.log("paper")
//   } else if(userChoice === "scissors") {
//     console.log("scissors")
//   } else {
//     console.log("Invalid input, (\"rock\", \"paper\" or \"scissors\")")
//   }

//   if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
//     console.log("User choose: " + userChoice)
//   } else {
//     console.log("Invalid input, (\"rock\", \"paper\" or \"scissors\")")
//   }

/**
 * isInputValid - Checks if input is valid (rock, paper or scissors)
 * @value: string ("rock" | "paper" | "scissors")
 * Return: true (if value is valid) and false otherwise
 */
function isInputValid(value) {
  if(value === "rock" || value === "paper" || value === "scissors") {
  return true;
} else {
  return false;
}
}

// declares a variable to store the user input
// uses a prompt
const userChoice = prompt("What do you choose?\n\"rock\", \"paper\" or \"scissors\"");

// calling the isInputValid function and using it to log outputs
if(isInputValid(userChoice)) {
console.log(`User choose: ${userChoice}`); // userChoice = "paper" -> User choose: paper
} else {
console.log("Invalid input, (\"rock\", \"paper\" or \"scissors\")") // userChoice = "fish" -> blah blah blah .... error message
}

// get computer to choose rock, paper or scissors

// if 
