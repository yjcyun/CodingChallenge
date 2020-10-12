// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* -------- array reverse -------- */
function palindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

/* -------- array every -------- */
// This is not the best of way solving this problem since it is double checking the char.
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}