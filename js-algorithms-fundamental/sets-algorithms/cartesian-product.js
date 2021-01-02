function cartProduct(setA, setB) {
  const product = [];

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl=[setAEl];
    }
    for (let setBEl of setB) {
      product.push([...setAEl, setBEl])
    }
  }

  return product;
}

/*
Time Complexity: O(n*m)
Space Complexity: O(n*m)
*/

function catesian(...sets) {
  let tempProduct = sets[0];
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }
}

const colors = ['blue', 'red'];
const sizes = ['m', 'l'];
const styles = ['round neck', 'v neck'];

console.log(cartProduct(colors, sizes, styles));

