// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* ---------Array reverse-------- */
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

/* --------- for loop -------- */
// function reverse(str) {
//   let newStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

/* --------for (let of)-------- */
// function reverse(str) {
//   let newStr = '';
//   for (let char of str) {
//     newStr = char + newStr;
//   }
//   return newStr;
// }

function reverse(str) {
  return str.split('').reduce((rev, current) => current + rev, '');
}

// reduce is used to take all the different values with an array and condense them all down to on singular value.