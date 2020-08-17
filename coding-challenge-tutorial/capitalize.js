// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'

function capitalize(str) {
  let cap = [];
  for (let el of str.split(' ')) { //['a','short','sentence']
    cap.push(el[0].toUpperCase() + el.slice(1));
  }
  return cap.join(' ')

}

capitalize('a short sentence')


// Solution # 2
function capitalize(str) {
  // Create an empty str = result
  let result = str[0].toUpperCase()
  // for each char in the str
  for (let i = 1; i < str.length; i++) {
    // if the char to the left is a space
    if (str[i - 1] === ' ') {
      // capitalize it and add it to result
      result += str[i].toUpperCase()
      // else 
    } else {
      // add it to result
      result += str[i]
    }
  }
  return result;
}

capitalize('a short sentence')