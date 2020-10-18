// Take an array of numbers as input and return the minimum value in the array

// Solution 1 - O(1)
function minValue(arr) {
  return Math.min(...arr)
}

// Solution 2 - O(n)
function minValue(arr) {
  let currentMin = arr[0];
  for (let num of arr) {
    if (num < currentMin) {
      currentMin = num;
    }
  }
  return currentMin;
}