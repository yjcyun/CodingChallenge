const adjacentElementsProduct = arr => {
  let product = arr[0] * arr[1];
  arr.forEach((value, index) => {
    if (index < arr.length - 1) {
      const tempProduct = value * arr[index + 1];
      if (tempProduct > product) {
        product = tempProduct;
      }
    }
  });
  return product;
}

// Other people's solutions
const adjacentElementsProduct = arr => {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}

/*Math.max returns  the largest of the zero or more numbers give as input PARAMETERS
ex. Math.max(1,3,2) => returns 3;
ex. const array1 = [1,3,2];
    console.log(Math.max(...array1)) // output: 3
*/

//  [3, 6, -2, -5, 7, 3]
// [6,-2,-5,7,3]