// Calculator the factorial of a number

function fact(n) {
  let product = n;
  for (let i = n - 1; i > 0; i--) {
    product = product * i;
  }
  return product;
}

// Recursion
function fact(n) {
  if(n === 1) {
    return 1;
  }
  return n* fact(n - 1);
}