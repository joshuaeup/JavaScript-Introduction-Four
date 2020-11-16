"use strict";

// Arrays
const nums1 = [4, 5, 6, 7, 0, 1, 2]; // Target 0
const nums2 = [4, 5, 6, 7, 0, 1, 2]; // Target 3

// Searches arr then returns index of target value
const findTheNumber = (arr, target) => arr.indexOf(target);

// Print to console
console.log(findTheNumber(nums1, 0));
console.log(findTheNumber(nums2, 3));
