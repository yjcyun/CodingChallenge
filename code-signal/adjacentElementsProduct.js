/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(arr) {
  let product = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * arr[i + 1] > product || product === null) {
      product = arr[i] * arr[i + 1];
    }
  }
  return product
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3]) 