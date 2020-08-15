// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numberArr = n.toString().split('');
  if (numberArr[0] === '-') {
    numberArr.shift();
    numberArr.reverse();
    numberArr.unshift('-');
  } else {
    numberArr = numberArr.reverse();
  }
  return +numberArr.join('');
}

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(reversed) * Math.sign(n);
}