// Determine whether an input number is a power of two
// isPowerOfTwo(8) //true

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  let dividedNumber = n;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }
  return true;
}

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  return n & (n - 1) === 0;
}