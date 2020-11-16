"use strict";

// Arrays
const input1 = [1, 4, 7];
const input2 = [10, 5];
const input3 = [1.5, 3, 2.5, 1];

// Function to calculate array average
const avg = (arr) => {
    let sum = 0;
    // Loop through entire array and generate sum of values
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // Print average to console
    console.log(sum / arr.length);
};

// Call function and pass in arrays
avg(input1);
avg(input2);
avg(input3);
