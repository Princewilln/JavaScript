// Love Calculator 😍😍😍
// Objective: Build a love calculator program that takes the names of two people as input and calculates their love compatibility.

// This myCrush() function is a love calculator program that takes the names of two people as input and calculates their love compatibility.
function myCrush() {

// this two line of code prompts the user for they and their crushes's name
const userName = prompt("What is your name? ").toLowerCase();
const userCrush = prompt("What is your crush name? ").toLowerCase();

// this lines of code checks the number of letters in the user and their crushes name multiply the results and save it in a varible.
// The next line multiplies users crush total number of letter in name by 10 divide it bey the value in LoveTotal, then multiply it by 100 to get % 
const loveTotal = userName.length * userCrush.length;
const lovePercentage = 10 * userCrush.length/loveTotal * 100;

// the line below uses if else condition to alert the user based on the condition that their name percentage meets in the if else declaration
if (lovePercentage > 90) {
   return alert(`Congratulations! You and ${userCrush} have a love percentae of %${lovePercentage} and you both are a perfect match made in the coding heavens! Keep coding together for a lifetime of bug-free happiness!`);
    } 
else if (lovePercentage > 80 && lovePercentage < 89) { 
       return alert(`Congratulations! You and ${userCrush} have a love percentae of %${lovePercentage} and you both are almost a perfect match made in the coding heavens! Keep coding together for a lifetime of bug-free happiness!`);
    }
else if (lovePercentage > 70 && lovePercentage < 79) { 
        return alert(`Congratulations! You and ${userCrush} have a love percentae of %${lovePercentage} and you both can bulid it to a perfect match made in the coding heavens! Keep coding together for a lifetime of bug-free happiness!`);
    }
else if ( lovePercentage > 60 && lovePercentage < 69) {
    return alert(`congratulation! You and ${userCrush} better keep up the coding your love percentage is %${lovePercentage} you need to step up your game to have life-time of bug-free happiness`)
}  
else {
    return alert(`Congratulations! You and ${userCrush} have a love percentae of %${lovePercentage} Better Keep Coding Solo!`)
};

}


myCrush();

console.log(myCrush());
// Requirements:

// Prompt the user to input their name and the name of their crush/partner.
// Ensure the program can handle both uppercase and lowercase letters.
// Use a predetermined formula to calculate the love percentage based on the names' characters.
// Display the love percentage along with a message that conveys the level of love between the two people.
// Include error handling for invalid inputs (e.g., special characters, numbers, or no input).
// Example Message:

// "Congratulations! You and [Name] are a perfect match made in the coding heavens! Keep coding together for a lifetime of bug-free happiness!"

// Range of Percentage:

// 90% - 100%: Coding Soulmates
// 80% - 89%: Coding Companions
// 70% - 79%: Code Buddies
// 60% - 69%: Coding Acquaintances
// Below 60%: Better Keep Coding Solo
// Bonus Tasks (Optional):

// Add a feature to display a random love quote along with the result.
// Implement a graphical interface (GUI) for a more user-friendly experience.
// Allow the program to take input from a text file or external source.
// Submission Guidelines:

// Submit the source code of your love calculator program.
// Include a brief explanation of the algorithm used for the love percentage calculation.
// If any additional features were implemented, provide a summary of their functionality.