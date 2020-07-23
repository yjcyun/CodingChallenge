// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// convert the string into an object

function maxChar(str) {
  // convert the str to an object
  const charObj = {};
  let max = 0;
  let maxChar = '';

  // iterate through str
  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++
    } else {
      charObj[char] = 1;
    }
  }

  // iterate through charObj
  for (let char in charObj) {
    if (charObj[char] > max) {
      max = charObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}
maxChar('hellooooooooooooooo');