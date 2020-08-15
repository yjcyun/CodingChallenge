// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // let newStr = '';
  // for (let word of str) {
  //   newStr = word + newStr;
  // }
  // return newStr === str;

  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1]
  })
}

module.exports = palindrome;
