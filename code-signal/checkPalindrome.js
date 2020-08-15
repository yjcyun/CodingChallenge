/*
Given the string, check if it is a palindrome.

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
*/

function checkPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str===reversed;
}