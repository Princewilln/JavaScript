/*DOM
API 
CMS 
clicks on navigation item - make sure the item scroll and avoid given a default jump .
plan your logic that you want to spply before developing
What’s the ideal workflow?
How many files do I need?
Do I modify the HTML first or the CSS?
How many JavaScript functions do I need?
Should my function be this many lines of code?
Is readability or performance more important? 

What is the Document?
What are events?
How do we listen for them?
How does event delegation help us avoid too many events?
Check Working with Browser Events in JavaScript and the DOM for a refresher if needed
How can we access elements with the following two methods? What are the differences between them?
querySelector()
querySelectorAll()
How do you use getElementbyId() to select a DOM element by its id?
We can also access elements with getElementsByClassName(). What does this method return, and how do you use it?
How do you use the className property? What does it return, and why would it be useful?
What are the different methods for classList?
Hint: the add(), remove(), and toggle() methods look particularly useful...
Every element has an innerHTML property that represents the markup of the element's content. How can you leverage this property 
to get and set content? */

// When to start: The code that sets up the loop — defining the starting value of a variable for instance.
// When to stop: The logical condition to test whether the loop should continue.
// How to get to the next item: The incrementing or decrementing step — for example, x = x * 3 or x = x - 1


/*
 * Programming Quiz - Checking Your Balance
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should inc'lude an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
// const eatsAnimal = true ;
// const eatsPlant = true ;
// let category;
// category = eatsPlant && eatsAnimal ? "omnivores" : "undefine";
 
// // eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined")
// console.log(category);
 
// let option = 3 ;
// switch (option) {
//   case 1:
//     console.log("You selected option 1.");
//   case 2:
//     console.log("You selected option 2.");
//   case 3:
//     console.log("You selected option 3.");
//     break;  
//   case 4:
//     console.log("You selected option 4.");
  
//   case 5:
//     console.log("You selected option 5.");
//   case 6:
//     console.log("You selected option 6.");
// }

// const favoriteFood = "soup";
// let restaurant = undefined;

// switch(favoriteFood) {
//   case "pizza":
//     restaurant ="pizzeria";
//     break;
//   default:
//      restaurant ="diner";
//     break;   
//   case "tacos":
//     restaurant ="taqueria";
//     break;
//   case "sushi": 
//     restaurant ="sushi bar";
//     break;
//   case "pancakes": 
//     restaurant ="pancake house";
//     break;
// }

// console.log("Go to the " + restaurant);

// const month = 7;
// let days;

// switch(month) {
//   case 1:
//   case 2:
//     days = 28;
//     break;
//   case 3:
//   case 4:
//     days = 30;
//     break;
//   case 5:
//   case 6:
//     days = 30;
//     break;
//   case 7:
//   case 8:
//   case 9:
//     days = 30;
//     break;
//   case 10:
//   case 11:
//     days = 30;
//     break;
//   case 12:
//   default:
//     days = 31;
// }
// console.log("There are " + days + " days in this month.");


// let education = "Doctoral degree";
// let salary; 

// switch (education ) {
//   case "no high school diploma":
//     salary = 25636;
//   case "high school diploma":
//     salary = 35256;
//   case "Associate's degree":
//     salary = 41496;
//   case "Bachelor's degree":
//     salary = 59124;
//   case "Master's degree":
//      salary = 69732;
//   case "Professional degree":
//      salary = 89960;
//   case "Doctoral degree":   
//       salary = 84393;
//       break;
//   default:
//       salary = "it depends";    
      
         
// }

// console.log("In 2015, a person with " + education + " earned an average of $ " + salary.toLocaleString("en-US") + "/year");

// let T = 60;
// while (T >= 0) {

//   if ( T === 60)  {
//     console.log("Solid rocket booster ignition and liftoff!");
//   }
//   else if (T === 54) {
//     console.log("Main engine start");
//   }
//   else if (T === 50) {
//     console.log("Activate main engine hydrogen burnoff system ");
//   } 
//   else if (T === 44) {
//     console.log("Activate launch pad sound suppression system ");
//   } 
//   else if (T === 29) {
//     console.log("Ground launch sequencer is go for auto sequence start");
//   } 
//   else if (T === 10) {
//     console.log("Orbiter transfers from ground to internal power");
//   } 
//   else {
//     console.log("T- "+ (T - 1) + " SECONDS" );
//   }
//   T = T - 1;
// }

// let x = 1;

// // while loop with a stop condition
// while (x <= 20) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log("JuliaJames");
//     }else if (x % 5 === 0) {
//         console.log("James");
//     }else if (x % 3 === 0) {
//         console.log("Julia");
//     }
//     else {
//         console.log(x);
//     }
//     // increment x at the end of each loop
//     x = x + 1 ; 
// }


// Let us take an iteration variable, that represent the remaining Time in seconds
// let n = 60

// // While loop with a stop condition
// while (n >= 0) {
//     if (n === 50) {
//         console.log("Orbiter transfers from ground to internal power");
//     }
//     else if (n === 31) {
//         console.log("Ground launch sequencer is go for auto sequence start");
//     }
//     else if (n === 16) {
//         console.log("Activate launch pad sound suppression system");
//     }
//     else if (n === 10) {
//         console.log("Activate main engine hydrogen burnoff system");
//     }
//     else if (n === 6) {
//         console.log("Main engine start");
//     }
//     else if (n === 0) {
//         console.log("Solid rocket booster ignition and liftoff!");
//     }
//     else{
//         console.log("T-"+n+" seconds");
//     }
    
//     //Never forget to decrement/increment the iteration variable in a while loop
//     // Otherwise, you loop will run infinite iterations
//     n = n-1;
// }


// let solution = 1;

// for (let i = 12; i >= 1; i--) {
//   solution *= i;
// }

// console.log(solution);






// const bookSeeker = "James";
// const book = "Great Expectations";
// function library() {
//   const librarian = "Julia"; 
//     console.log(bookSeeker + " asked " + librarian + " for " + book);
//     function classicLiterature() {
//         const shelf = "Dickens"; 
//         console.log( bookSeeker + " found " + book + " on the " + shelf + " shelf!");
//     }
//     classicLiterature();
// }


// library();
// line = 0
// function makeLine(length) {
//   var let = "";
//   for (let j = 1; j <= length; j++) {
//     line += "* "
//   }
//   return line + "\n";
// }
// console.log(makeLine(8))

// let sound = "" ; 
// function laugh(num) {
//     for (var x = 0 ; x < num ; x++) {
//         sound = sound + "ha" ;  
//     }
//     sound = sound +"!"; 
//     return sound; 
// }
// console.log(laugh(5))


// const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
// for (let index = 0; index < prices.length; index++){
//   //change the value of first element
//   if (index === 0) {
//     prices[index] = prices[index] * 2;
//   }
//   //change the value of third element
//   else if (index === 2) {
//     prices[index] = prices[index] * 2;
//   }
//   //change the value of seventh element
//   else if (index === 6) {
//     prices[index] = prices[index] * 2;
//   }
// }
// console.log(prices);
// const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
// const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
// const team3 = [];
// const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];

// function hasEnoughPlayers(team) {
//         if (team.length >= 7) {
//             console.log(true);
//         }
//         else {
//             console.log(false);
//         }
//     }
// hasEnoughPlayers(team1);
// hasEnoughPlayers(team2);
// hasEnoughPlayers(team3);
// hasEnoughPlayers(team4);


// const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

// test.forEach(function(a,num) {
//     if (a % 3 === 0) {
//         num += 100 ;
//     }
// console.log(a + " here " + num);

// });
 



test.forEach(function);
const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totals = bills.map(function (item, i) {
    // if (item % 3 === 0) {
    //   console.log("Element at index " + index + " is divisible by 3");
    //   test[index] = test[index] + 100;
    // } else {
        item *= 0.15
        item = bills[i] + item
      return (Number(item.toFixed(2)));
    // } 
  });
  console.log(totals)


// var grid = [
//     [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//     [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//     [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//     [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//     [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//     [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//     [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//     [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//     [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//     [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];
// // const newGrid = grid.map(function(item,i,d) {
//   for (let r = 0; r < grid.length; r++) {
//     for (let c = 0; c < grid[r].length; c++) {
//         if (grid[r][c] % 2 === 0) {
//             grid[r][c] = "even" ;
//         }
//            else {
//             grid[r][c] = "odd" ;
//         }
//       }
   
//     //  return d;
      
//   }

// //   });
//   console.log(grid);



// const umbrella = { 
//     color: "pink",
//     isOpen: false,
//     open: function() { 
//       if (umbrella.isOpen === true) {
//         return "The umbrella is already opened!";
//       } else {
//         umbrella.isOpen = true;
//         return "Julia opens the umbrella!";
//       }
//      },
    
//     close: function() {
//         if (umbrella.isOpen === true) {
//           umbrella.isOpen = false;
//           return "Julia closes the umbrella!";
//         } else {
//           return "The umbrella is already closed!";
//         }
//       } 

//   };

//  console.log (umbrella.isOpen); // returns false
//  console.log(umbrella.open());
//   console.log(umbrella.close());
//   console.log(umbrella.isOpen);

//   const breakfast = {

//     name: "The Lumberjack",
//     price: "$9.95",
//     ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
//   }



//   const savingsAccount = {
//     balance: 1000,
//     interestRatePercent: 1,
//     printAccountSummary: function() {
//        return "Welcome!\nYour balance is currently $"+savingsAccount.balance+ " and your interest rate is " +savingsAccount.interestRatePercent+ "%."
//     },
//     deposit: function addMoney(amount) {
//       if (amount > 0) {
//         savingsAccount.balance += amount;
//       }
//     },
//     withdraw: function removeMoney(amount) {
//       var verifyBalance = savingsAccount.balance - amount;
//       if (amount > 0 && verifyBalance >= 0) {
//         savingsAccount.balance -= amount;
//       }
//     }

//   };
//   console.log(savingsAccount.printAccountSummary())

// const facebookProfile = {
//     name: "Princewill",
//     friends: 7,
//     messages: ["My first post in a long time", "I just wanted to make this post to says high to you all"],
//     postMessage: function(message){
//        message = "this is my todays dump for fb";
//       return  facebookProfile.messages.push(message);
//     //    console.log(messages);
//     },
//     deleteMessage: function(index){
//         index = facebookProfile.messages[0];
        
//       return   facebookProfile.messages.splice(index, 1); 
//     },
//     addFriend: function(){
//         return facebookProfile.friends += 1; 

//     },
//     removeFriend: function(){

//         return facebookProfile.friends -=1;

//     }
// };
// console.log("Name: ", facebookProfile.name);
// console.log("Messages: ", facebookProfile.messages);
// console.log("my facebook post ", facebookProfile.postMessage());
// console.log(facebookProfile.deleteMessage());
// console.log(facebookProfile.addFriend());
// console.log(facebookProfile.removeFriend());



// const facebookProfile = {
//     name: "Udacian",
//     friends: 25,
//     messages: ["Message 1", "Message 2", "Message 3", "Message 4"],
//     postMessage: function(message){
//         facebookProfile.messages.push(message);
//     },
//     deleteMessage: function(index){
//         // In the following splice() method call,
//         // - argument 1 = index from where the element has to be deleted
//         // - argument 2 = count of elements to be deleted
//         facebookProfile.messages.splice(index, 1);
//     },
//     addFriend: function(){
//         facebookProfile.friends = facebookProfile.friends + 1;
//         //friends += 1; // this statement is equivalent to the above
//     },
//     removeFriend: function(){
//         if(facebookProfile.friends>0)
//             facebookProfile.friends = facebookProfile.friends - 1;
//     }
// };

// console.log("Name: ", facebookProfile.name);
// console.log("Messages: ", facebookProfile.messages);
// facebookProfile.postMessage("New message!");
// console.log("Messages: ",  facebookProfile.messages);
// facebookProfile.deleteMessage(2);
// console.log("Messages: ",  facebookProfile.messages);
// console.log("Friends: ", facebookProfile.friends);
// facebookProfile.addFriend();
// console.log("Friends: ", facebookProfile.friends);
// facebookProfile.removeFriend();
// console.log("Friends: ", facebookProfile.friends);