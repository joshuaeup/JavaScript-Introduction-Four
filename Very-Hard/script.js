"use strict";

const coins = [1, 2, 5];
const goal = 11;

// const coins = [2];
// const goal = 11;

function combination(coins, value) {
    // Exit condition for recursion
    if (value == 0) return 0;

    // Set combinationAmount variable to the largest number possible in JS
    let combinationAmount = Number.MAX_VALUE;

    // Loop through the entire length of the coins array
    for (let i = 0; i < coins.length; i++) {
        // if the coin at index i is less than or equal to value -> continue
        if (coins[i] <= value) {
            // Call function on itself and pass in values and subtract the coin at index i from the goal value
            let innerFunction = combination(coins, value - coins[i]);

            // Check to insure the innerFunctions result does not exceed the maximum value allowed in JS
            if (innerFunction === Number.MAX_VALUE) {
                return -1;
                // Checls of the innerFunction value is less than the current recored combinationAmount value on line 12
            } else if (innerFunction + 1 < combinationAmount) {
                // if the innerFunction is less then you will set the combinationAmount to the returned innerFunction value
                combinationAmount = innerFunction + 1;
            }
        }
    }

    return combinationAmount;
}

console.log(combination(coins, goal));
