// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


/* ---------Array reverse-------- */
function reverse(str) {
  return str.split('').reverse().join('');
}

/* --------for (let of)-------- */
function reverse(str) {
  let newStr = '';
  for (let char of str) {
    newStr = char + newStr;
  }
  return newStr;
}

/* --------reduce-------- */
function reverse(str) {
  return str.split('').reduce((rev, current) => current + rev, '');
}