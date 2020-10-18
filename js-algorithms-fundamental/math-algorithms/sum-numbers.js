// Write an algorithm that takes an array of numbers as input and calculates the sum of thos numbers

// Solution 1 - time complexity is O(n)
function sumNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// Solution 2 - time complexity is O(n)
function sumNumbers(arr) {
  return arr.reduce((total, curr) => curr + total, 0);
}