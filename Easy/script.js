"use strict";

// Arrays
const input1 = [1, 4, 7];
const input2 = [10, 5];
const input3 = [1.5, 3, 2.5, 1];

// Function to calculate array average
const average = (arr) => {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
};

// Call function and pass in arrays
console.log(average(input1));
console.log(average(input2));
console.log(average(input3));
