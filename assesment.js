function getMinPerformers(startTime, endTime) {
    let events = [];

    // Step 1: Create events for start and end times
    for (let i = 0; i < startTime.length; i++) {
        events.push([startTime[i], 1]);  // Start time: +1 performer
        events.push([endTime[i] + 1, -1]); // End time: -1 performer
    }

    // Step 2: Sort events by time
    events.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]; // Process -1 before +1 if times are the same
        }
        return a[0] - b[0];
    });

    // Step 3: Sweep through events to find maximum overlap
    let currentPerformers = 0;
    let maxPerformers = 0;

    for (let event of events) {
        currentPerformers += event[1];
        maxPerformers = Math.max(maxPerformers, currentPerformers);
    }

    return maxPerformers;
}
console.log("Minimum performers required:", getMinPerformers(startTime, endTime));

// arr = [2,1,3,5,4];

// function miniMaxSum(arr){
         // Write your code here
    // I am given an array of positive intergers e.g arr = [1, 3,5,7,9]
    // The want the minimum value that i can get by adding together four numbersof of the 5 intergers
    // This has to be the smallest 4 numbers
    // And they also want maximum value that i can get by adding together 4 of the 5 intergers
    // this has to be the 4 smallest integers
    // they want me to print the minimum value and the maximum value as a single line of two
    // spaced-separeted long intergers e.g 16  24  and not 16 24
    // twoSpaced = minimum.toString() + "  " + maximum.toString();

    // it is advisable to sort the array first in ascending order to ensure you can easily add 
    // numbers from array.length - 2 to get the sum of minimum
    // and to add numbers from array[1] to array.length-1 to get the sum of maximum nums


//     let SumOfMinNums = 0;
//     let SumOfMaxNums = 0;

//  arr.sort(function(a, b){
//     return a - b;
// })
//   for(let i = 0; i < arr.length-1; i++){
//       SumOfMinNums += arr[i];  
// }
// for (let i = 1; i < arr.length; i++){
//     //console.log(arr[i]);
//     SumOfMaxNums += arr[i];
// }
// console.log(SumOfMinNums.toString() + " " + SumOfMaxNums.toString());
// }

// miniMaxSum(arr);
// arr = arr.sort(function(a, b){
//     return a - b;
// })
// total = 0;
// for (let i = 0; i < arr.length-1; i++) {
//     console.log(arr[i]);
//     total += arr[i];

// }

// console.log(total);


// let myName = "Oluwafemi";
// console.log(myName.length);
// let splitName = myName.split('').reverse().join('');
// console.log(splitName);

// let reverseName = splitName.reverse();
// console.log(reverseName);
// let joinName = reverseName.join('');
// console.log(joinName);
// console.log(joinName.includes("l"));



// const arr = [-4, 3, -9, 0, 4, 1];
// function plusMinus(arr) {
//     const n = arr.length;
//     // Counters for positive, negative, and zero values
//     let positiveCount = 0;
//     let negativeCount = 0;
//     let zeroCount = 0;
//  // Iterate through the array
//     for (let num of arr) {
//         if (num > 0) {
//             positiveCount++;
//         } else if (num < 0) {
//             negativeCount++;
//         } else {
//             zeroCount++;
//         }
//     }
//     // Calculate the ratios
//     const positiveRatio = positiveCount / n;
//     const negativeRatio = negativeCount / n;
//     const zeroRatio = zeroCount / n;
//     // Print the ratios to 6 decimal places
//     console.log(positiveRatio.toFixed(6));
//     console.log(negativeRatio.toFixed(6));
//     console.log(zeroRatio.toFixed(6));
// }
// // Example usage:
// plusMinus(arr);



// fruits.push("Kiwi");
// fruits.unshift("Lemon");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(fruits[i]);
// }


// let total = 0;
// let newFruits = fruits.map(function(fruits) {
//     fruits += 1;
//     total += fruits;
//     console.log(fruits);
//     return fruits;  
// })
// console.log(newFruits);
// console.log(total);


// let filterfruits = fruits.filter(function(fruits) {
//    return fruits / 2 === 2 || fruits / 2 === 1;
// });
// console.log(filterfruits);



// let total = 0;
// let meek = [];
// fruits.forEach(function(fruit) {
//     fruit += 1;
//     total += fruit;
//     meek.push(fruit);
//     //console.log(fruits);
//     return fruit;
// });
// console.log(total);
// console.log(meek);


// let allFruits = fruits.reduce(function(total, fruit) {
//     return total + fruit;
// }, 0);
// console.log(allFruits);


// const items = [
//     { name: 'Apple', category: 'Fruit' },
//     { name: 'Onion', category: 'Vegetable' },
//     { name: 'Orange', category: 'Fruit' },
//     { name: 'Lettuce', category: 'Vegetable' },
//   ];
// ;  
//  newOb = items[0];
//  newOb[ items[0].category] = [];
//  console.log(newOb);
    //newOb[items[0].category].push(items[0].name);
    //console.log(newOb);
// heB = items[0].category;



// g = {};
// if (!g[items[0].category]) {
//     newG = g[items[0].category] = [];
// }
// newG.push(items[0].name, items[2].name);
// console.log(g);